import { ArrowFatRight } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Header, Matchup } from "../components/_helper";
import { Matchup as MatchupModel, Roster, User } from "../models/_helper";
import { PLAYOFF_SCHEDULE } from "../utils/playoffInfo";

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
    <div className="relative w-full min-h-screen bg-rad-black">
      <Header last_updated={last_updated} active_route="matchups" />
      <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
        <div className="w-[95%] px-4 h-full">
          <div className="flex items-center justify-center w-full h-14 sm:h-20">
            <div className="hidden w-1/3 sm:block"></div>
            <h1 className="block w-1/2 text-2xl text-center cursor-default sm:text-2xl md:text-3xl sm:hidden text-light">
              {nfl_state.status === "in_season"
                ? `WEEK ${nfl_state.display_week}`
                : `${playoffRound?.matchup_titles[currentMatchup - 1]}`}
            </h1>
            <h1 className="hidden w-1/3 text-3xl text-center cursor-default sm:text-2xl md:text-3xl sm:block text-light">
              {nfl_state.status === "in_season"
                ? `WEEK ${nfl_state.display_week}`
                : `${playoffRound?.matchup_titles[currentMatchup - 1]}`}
            </h1>
            <div className="flex items-center pt-[3px] justify-end w-1/3 h-full md:pr-14 text-primary">
              <button
                className="flex items-center justify-center px-3 text-base sm:text-[1.3rem] rounded-lg h-[50%] bg-stone-900 hover:bg-primary hover:text-stone-900"
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
