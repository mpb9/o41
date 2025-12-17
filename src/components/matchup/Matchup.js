import PropTypes from "prop-types";
import {
  getMatchupByRosterId,
  getRostersByMatchupId,
  getUserByUserId,
} from "../../services/_helper";
import { MatchupTeam } from "../_helper";

Matchup.propTypes = {
  matchups: PropTypes.arrayOf(PropTypes.object).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  current_matchup: PropTypes.number.isRequired,
};
export default function Matchup({ matchups, rosters, users, current_matchup }) {
  if (getRostersByMatchupId(current_matchup, rosters, matchups).length >= 3) {
    return (
      <div className="gap-2 xl:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:mx-10 pb-12 sm:pb-24">
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
    );
  }
  return (
    <div className="gap-2 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 xl:mx-14 pb-12 sm:pb-24">
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
  );
}
