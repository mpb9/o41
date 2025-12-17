import { ArrowFatRight } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Header, Matchup } from "../components/_helper";
import { PLAYOFF_SCHEDULE } from "../constants/playoffInfo";
import { Matchup as MatchupModel, Roster, User } from "../models/_helper";

Matchups.propTypes = {
  matchups: PropTypes.arrayOf(PropTypes.instanceOf(MatchupModel)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  nfl_state: PropTypes.object.isRequired,
  last_updated: PropTypes.instanceOf(Date).isRequired,
};
export default function Matchups({
  matchups,
  rosters,
  users,
  nfl_state,
  last_updated,
}) {
  const [currentMatchup, setCurrentMatchup] = useState(1);
  const [playoffRound, setPlayoffRound] = useState(null);

  useEffect(() => {
    if (nfl_state.status === "in_season") return;
    const updatedRound = PLAYOFF_SCHEDULE.find(({ season, week }) => {
      return (
        season === Number(nfl_state.season) &&
        week === Number(nfl_state.display_week)
      );
    });
    setPlayoffRound(updatedRound);
  }, [nfl_state]);

  function toggleMatchup() {
    if (matchups.find(({ matchup_id }) => matchup_id === currentMatchup + 1)) {
      setCurrentMatchup(currentMatchup + 1);
    } else setCurrentMatchup(1);
  }

  return (
    <div className="relative bg-rad-black w-full min-h-screen">
      <Header last_updated={last_updated} active_route="matchups" />
      <div className="flex flex-col justify-start items-center w-full h-full-header-mobile sm:h-full-header overflow-scroll">
        <div className="px-4 w-[95%] h-full">
          <div className="flex justify-center items-center my-2.5 w-full h-14 sm:h-20">
            <div className="hidden sm:block w-1/3"></div>
            <h1 className="w-1/2 sm:w-1/3 text-light text-xl sm:text-2xl md:text-3xl text-center cursor-default">
              {nfl_state.status === "in_season"
                ? `WEEK ${nfl_state.display_week}`
                : `${playoffRound?.matchup_titles[currentMatchup - 1]}`}
            </h1>
            <div className="flex justify-end items-center pt-0.5 md:pr-14 w-1/3 h-full text-primary">
              <button
                className="flex justify-center items-center bg-stone-800 sm:hover:bg-primary px-3 rounded-lg h-2/3 sm:h-1/2 sm:hover:text-stone-900 sm:text-[1.3rem] text-base"
                onClick={toggleMatchup}
              >
                <span>NEXT</span>
                <ArrowFatRight weight="fill" className="ml-2" />
              </button>
            </div>
          </div>
          <Matchup
            matchups={matchups}
            rosters={rosters}
            users={users}
            current_matchup={currentMatchup}
          />
        </div>
      </div>
    </div>
  );
}
