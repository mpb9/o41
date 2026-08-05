import PropTypes from "prop-types";
import { DynastySidebar, Header, StandingsSeason } from "../components/_helper";
import { IMAGES } from "../constants/fileInfo";
import { League, NflState, Roster, User } from "../models/_helper";

League.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.instanceOf(League)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  nfl_state: PropTypes.instanceOf(NflState),
};
export default function Dynasty({ leagues, rosters, users, nfl_state }) {
  return (
    <div className="relative w-full min-h-screen">
      <Header active_route="dynasty" />
      <div className="flex flex-row w-full h-full-header-mobile sm:h-full-header overflow-y-scroll overscroll-none">
        <DynastySidebar
          leagues={leagues}
          rosters={rosters}
          users={users}
          nfl_state={nfl_state}
        />
        <div className="bg-rad-black md:pb-[20vh] lg:pb-[25vh] 2xl:pb-0 xl:pb-[30vh] border-secondary w-full md:w-3/4 2xl:w-5/6 xl:w-4/5 overflow-y-scroll text-primary">
          <div className="flex justify-between items-middle w-full">
            <div className="flex justify-center items-center w-full">
              {/* <h1 className="my-5 text-light text-3xl md:text-4xl 2xl:text-5xl cursor-default">
                {leagues[0].name}
              </h1> */}
              <h1 className="mt-5 mb-4 my-font-electro hover:font-bold text-light hover:text-primary text-4xl md:text-5xl 2xl:text-6xl tracking-widest cursor-default">
                ORDER 41
              </h1>
            </div>
          </div>

          <StandingsSeason
            leagues={leagues}
            rosters={rosters}
            users={users}
            nfl_state={nfl_state}
          />
          <div className="bottom-0 fixed w-full md:w-3/4 2xl:w-5/6 xl:w-4/5">
            <div className="flex justify-between items-end w-full">
              <img
                alt=""
                className="hidden md:block opacity-90 drop-shadow-2xl h-32 lg:h-40 xl:h-48 object-left"
                src={`${IMAGES.DIRS.owner_group}/manion-pech.png`}
              />
              <img
                alt=""
                className="hidden xl:block opacity-90 drop-shadow-2xl -mb-8 xl:-mb-9 pl-8 h-36 lg:h-52 xl:h-44 object-left"
                src={`${IMAGES.DIRS.owner("beebe")}/full-body2.png`}
              />
              <img
                alt=""
                className="hidden md:block opacity-90 drop-shadow-2xl -mb-1 h-32 lg:h-40 xl:h-32 object-left"
                src={`${IMAGES.DIRS.owner_group}/heads-milan.png`}
              />
              <img
                alt=""
                className="hidden xl:block opacity-90 drop-shadow-2xl -mb-8 xl:-mb-9 pr-8 h-36 lg:h-52 xl:h-44 object-left"
                src={`${IMAGES.DIRS.owner("whalen")}/full-body.png`}
              />
              <img
                alt=""
                className="hidden md:block opacity-90 drop-shadow-2xl h-32 lg:h-40 xl:h-48 object-right"
                src={`${IMAGES.DIRS.owner_group}/ruff-edel.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
