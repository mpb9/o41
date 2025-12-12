import PropTypes from "prop-types";
import { Header, LeagueSidebar, StandingsSeason } from "../components/_helper";
import { IMAGES } from "../constants/fileInfo";

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
      <div className="flex flex-row w-full overflow-y-scroll overscroll-none h-full-header-mobile sm:h-full-header">
        <LeagueSidebar
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="w-full overflow-y-scroll bg-rad-black border-secondary md:pb-[20vh] lg:pb-[25vh] xl:pb-[30vh] 2xl:pb-0 md:w-3/4 xl:w-4/5 2xl:w-5/6 text-primary">
          <div className="flex justify-between w-full items-middle">
            <div className="flex items-center justify-center w-full">
              <h1 className="my-5 text-3xl cursor-default md:text-4xl 2xl:text-5xl text-light">
                {leagues[0].name}
              </h1>
            </div>
          </div>

          <StandingsSeason
            leagues={leagues}
            rosters={rosters}
            users={users}
            nfl_state={nfl_state}
          />
          <div className="fixed bottom-0 w-full md:w-3/4 xl:w-4/5 2xl:w-5/6">
            <div className="flex items-end justify-between w-full">
              <img
                className="hidden object-left h-32 drop-shadow-2xl opacity-90 lg:h-40 xl:h-48 md:block"
                src={`${IMAGES.DIRS.owner_group}/manion-pech.png`}
              />
              <img
                className="hidden object-left pl-8 -mb-8 xl:-mb-9 h-36 opacity-90 drop-shadow-2xl lg:h-52 xl:h-44 xl:block"
                src={`${IMAGES.DIRS.owner("beebe")}/full-body2.png`}
              />
              <img
                className="hidden object-left h-32 -mb-1 drop-shadow-2xl opacity-90 lg:h-40 xl:h-32 md:block"
                src={`${IMAGES.DIRS.owner_group}/heads-milan.png`}
              />
              <img
                className="hidden object-left pr-8 -mb-8 drop-shadow-2xl opacity-90 xl:-mb-9 h-36 lg:h-52 xl:h-44 xl:block"
                src={`${IMAGES.DIRS.owner("whalen")}/full-body.png`}
              />
              <img
                className="hidden object-right h-32 drop-shadow-2xl opacity-90 lg:h-40 xl:h-48 md:block"
                src={`${IMAGES.DIRS.owner_group}/ruff-edel.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
