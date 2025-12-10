import PropTypes from "prop-types";
import { Header, LeagueSidebar, StandingsSeason } from "../components/_helper";

League.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.object).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  nfl_state: PropTypes.object.isRequired,
};
export default function League({ leagues, rosters, users, nfl_state }) {
  return (
    <div className="relative w-full min-h-screen">
      <Header active_route="league" />
      <div className="flex flex-row w-full h-full-header">
        <LeagueSidebar
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="w-full bg-rad-black md:bg-rad-black border-secondary md:w-3/4 xl:w-4/5 2xl:w-5/6 text-primary">
          <h1 className="flex items-center justify-center my-5 text-3xl cursor-default md:text-4xl 2xl:text-5xl text-dark">
            {leagues[0].name}
          </h1>
          {/* LEAGUE PICTURE */}

          <StandingsSeason
            leagues={leagues}
            rosters={rosters}
            users={users}
            nfl_state={nfl_state}
          />
        </div>
      </div>
    </div>
  );
}
