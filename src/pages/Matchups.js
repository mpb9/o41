import { ArrowFatRight } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Header, Matchup } from "../components/_helper";

Matchups.propTypes = {
  matchups: PropTypes.array.isRequired,
  rosters: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
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

  function toggleMatchup() {
    if (currentMatchup >= matchups.length / 2) setCurrentMatchup(1);
    else setCurrentMatchup(currentMatchup + 1);
  }

  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header last_updated={last_updated} active_route="matchups" />
      <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
        <div className="w-[95%] px-4 h-full">
          <div className="flex items-center justify-center w-full h-14 sm:h-20">
            <div className="hidden w-1/3 sm:block"></div>
            <h1 className="block w-1/2 text-2xl text-center cursor-default sm:text-2xl md:text-3xl sm:hidden text-stone-200">
              {nfl_state.season_type === "regular"
                ? `WEEK ${nfl_state.display_week}`
                : `PLAYOFFS`}
            </h1>
            <h1 className="hidden w-1/3 text-3xl text-center cursor-default sm:text-2xl md:text-3xl sm:block text-stone-200">
              {nfl_state.season_type === "regular"
                ? `WEEK ${nfl_state.display_week}`
                : `PLAYOFFS`}
            </h1>
            <div className="flex items-center pt-[3px] justify-end w-1/3 h-full md:pr-14 text-primary">
              <button
                className="flex items-center justify-center px-3 text-base sm:text-[1.3rem] rounded-lg h-[50%] bg-stone-900 hover:bg-[#aed998] hover:text-stone-900"
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
