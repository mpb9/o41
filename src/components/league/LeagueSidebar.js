import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { League, Roster, User } from "../../models/_helper";
import { Loading } from "../../pages/_helper";
import { getUserByRosterId } from "../../services/_helper";
import { TOILET_BOWLS } from "../../utils/playoffInfo";

LeagueSidebar.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.instanceOf(League)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  nfl_state: PropTypes.object.isRequired,
};
export default function LeagueSidebar({ leagues, rosters, users, nfl_state }) {
  const [reigningChamp, setReigningChamp] = useState(null);
  const [reigningLoser, setReigningLoser] = useState(null);

  useEffect(() => {
    function getReigningChamp() {
      setReigningChamp(
        getUserByRosterId(
          leagues[0].metadata.latest_league_winner_roster_id,
          rosters,
          users
        )
      );
    }
    function getReigningLoser() {
      const prevSeason = leagues[1].season;
      TOILET_BOWLS.forEach((toilet_bowl) => {
        if (toilet_bowl.season === prevSeason) {
          setReigningLoser(toilet_bowl.owner);
        }
      });
    }
    getReigningChamp();
    getReigningLoser();
  }, [leagues, rosters, users]);

  if (reigningLoser !== null && reigningChamp !== null) {
    return (
      <div className="hidden w-0 h-full pt-2 pb-4 border-0 md:w-1/4 xl:w-1/5 2xl:w-1/6 border-r-1 bg-dark border-secondary md:flex md:flex-col md:items-center md:justify-around">
        <div className="flex flex-col w-full px-6 pb-2 text-center text-secondary">
          <p className="leading-5 2xl:leading-6">PREVIOUS DYNASTY CHAMPION:</p>
          {/* UPDATE MANUALLY */}
          <p className="mb-2 2xl:mb-3 text-primary">N/A</p>
          <p className="leading-5 2xl:leading-6">
            {leagues[1].season} SEASON CHAMPION:
          </p>
          <p className="mb-2 leading-5 2xl:leading-6 2xl:mb-3 text-primary">
            {reigningChamp.team_name}
          </p>

          <p className="leading-5 2xl:leading-6">
            {leagues[1].season} TOILET BOWL LOSER:
          </p>
          <p className="mb-2 capitalize 2xl:mb-3 text-primary">
            {" "}
            {reigningLoser.full_name}
          </p>
          <p className="mb-2 2xl:mb-3">
            LEAGUE: <span className="text-primary">YEAR {leagues.length}</span>
          </p>
          <p className="mb-2 2xl:mb-3">
            {/* UPDATE MANUALLY */}
            DYNASTY: <span className="text-primary">YEAR 3</span>
          </p>
          <p className="mb-2 2xl:mb-3">
            SEASON: <span className="text-primary">{leagues[0].season}</span>
          </p>
          <p>
            WEEK: <span className="text-primary">{nfl_state.week}</span>
          </p>
        </div>

        {/* <hr className="w-full border-secondary" /> */}

        <div className="flex flex-col justify-start overflow-hidden">
          <img
            src="/img/logo.png"
            alt="ORDER 41"
            className="w-3/5 mx-auto"
            width={"100%"}
          />
          <div className="px-6 pt-2 text-center lg:pt-2 xl:pt-2 2xl:pt-6 text-light">
            <p className="text-xs lg:text-sm xl:text-xs 2xl:text-sm">
              ORDER 41 is a fantasy football dynasty league consisting of{" "}
              <NavLink to="/teams" className="hover:underline">
                six (6) men
              </NavLink>{" "}
              that originated in the year 2023 CE.
            </p>
          </div>
        </div>
        {/* STANDINGS */}
        {/* TOP SCORERS */}
      </div>
    );
  }
  return <Loading />;
}
