import PropTypes from "prop-types";
import {
  Header,
  StandingsDynasty,
  StandingsLeague,
  StandingsSeason,
} from "../components/_helper";

Standings.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.object).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  nfl_state: PropTypes.object.isRequired,
};
export default function Standings({ leagues, rosters, users, nfl_state }) {
  return (
    <div className="relative w-full min-h-screen bg-rad-black">
      <Header active_route="standings" />
      <div className="w-full pt-2 pb-20 overflow-y-scroll h-full-header-mobile sm:h-full-header">
        <StandingsSeason
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="w-full h-1 my-4"></div>
        <StandingsDynasty
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="w-full h-1 my-4"></div>
        <StandingsLeague
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
      </div>
    </div>
  );
}
