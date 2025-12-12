import PropTypes from "prop-types";
import { Header } from "../components/_helper";
import { IMAGES } from "../constants/fileInfo";

Teams.propTypes = {
  rosters: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};
export default function Teams({ rosters, users }) {
  const teamButton =
    "fixed text-sm px-2 py-3 xl:px-6 xl:py-8 bg-light border-2 border-light text-dark hover:bg-red-600 hover:text-primary hover:border-primary";
  return (
    <div className="relative w-full min-h-screen bg-rad-orange">
      <Header active_route="teams" />

      <div className="w-full overflow-y-scroll h-full-header-mobile sm:h-full-header">
        {/* BACKGROUND IMAGES */}
        <div className="flex items-end sm:items-start justify-center w-full pl-10 mt-0 sm:pt-24 md:pt-2 sm:pl-10 lg:pt-4 lg:pl-20 xl:pl-0 xl:pt-1 lg:w-[85%] 2xl:pl-0 2xl:pt-0 xl:w-full overflow-clip h-full">
          <img
            className="h-3/4 sm:h-full lg:h-[150%] xl:h-[175%] 2xl:h-auto overflow-clip grayscale-[40%] opacity-80 sm:opacity-70 drop-shadow-2xl"
            src={`${IMAGES.DIRS.owner("beebe")}/full-body.png`}
          />
        </div>
        <div className="fixed bottom-0 w-full">
          <img
            className="opacity-95 drop-shadow-2xl"
            src={`${IMAGES.DIRS.owner_group}/table-milan.png`}
          />
        </div>

        {/* TEAM BUTTONS */}
        <button
          className={`${teamButton} top-[20%] right-[32%] sm:right-[25%] md:right-[15%] lg:right-[5%] xl:top-[13%] xl:right-[4%]`}
        >
          MICHAEL <br />
          BEEBE
        </button>
        <button
          className={`${teamButton} top-[31%] right-[12%] sm:right-[4%] lg:right-[15%] xl:top-[20%] xl:right-[18%]`}
        >
          CONNOR <br />
          RUFF
        </button>
        <button
          className={`${teamButton} top-[9%] right-[10%] md:right-[20%] lg:top-[12%] lg:right-[25%] xl:top-[9%] xl:right-[33%]`}
        >
          DREW <br />
          PECHULONIS
        </button>
        <button
          className={`${teamButton} top-[10%] left-[20%] sm:left-[6%] xl:top-[10%] xl:left-[23%]`}
        >
          JIMMY <br />
          WHALEN
        </button>
        <button
          className={`${teamButton} top-[35%] left-[2%] sm:top-[32%] xl:top-[24%] xl:left-[12%]`}
        >
          MATTHEW <br />
          EDEL
        </button>
        <button
          className={`${teamButton} top-[22%] left-[6%] sm:left-[10%] lg:left-[17%] xl:top-[15%] xl:left-[2%]`}
        >
          CONNER <br />
          MANION
        </button>
      </div>
    </div>
  );
}
