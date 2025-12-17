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
    <div className="relative bg-rad-black w-full min-h-screen">
      <Header active_route="standings" />
      <div className="pt-2 pb-20 w-full h-full-header-mobile sm:h-full-header overflow-y-scroll">
        <StandingsSeason
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="my-4 w-full h-1"></div>
        <StandingsDynasty
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="my-4 w-full h-1"></div>
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
