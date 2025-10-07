import PropTypes from "prop-types";
import {
  getMatchupByRosterId,
  getRostersByMatchupId,
  getUserByUserId,
} from "../../services/_helper";
import { MatchupTeam } from "../_helper";

Matchup.propTypes = {
  matchups: PropTypes.array.isRequired,
  rosters: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  current_matchup: PropTypes.number.isRequired,
};

export default function Matchup({ matchups, rosters, users, current_matchup }) {
  return (
    <>
      {getRostersByMatchupId(current_matchup, rosters, matchups).length >= 3 ? (
        <div className="grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 md:grid-cols-3 xl:gap-4 xl:mx-10">
          {getRostersByMatchupId(current_matchup, rosters, matchups).map(
            (roster) => (
              <MatchupTeam
                key={roster.user_id}
                user={getUserByUserId(roster.user_id, users)}
                roster={roster}
                matchup={getMatchupByRosterId(roster.roster_id, matchups)}
              />
            )
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 xl:gap-8 xl:mx-14">
          {getRostersByMatchupId(current_matchup, rosters, matchups).map(
            (roster) => (
              <MatchupTeam
                key={roster.user_id}
                user={getUserByUserId(roster.user_id, users)}
                roster={roster}
                matchup={getMatchupByRosterId(roster.roster_id, matchups)}
              />
            )
          )}
        </div>
      )}
    </>
  );
}
