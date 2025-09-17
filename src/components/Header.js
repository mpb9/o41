import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../utils/leagueInfo";

export default function Header({ last_updated, active_route }) {
  return (
    <div className="flex items-center justify-center w-full text-center sm:bg-[#7e7a75] h-[3.25rem] sm:h-[3.5rem] px-0 sm:px-8 xl:px-10">
      {last_updated ? (
        <div className="hidden w-1/4 text-left cursor-default sm:block">
          <p className="text-xl md:text-xl my-font-terminess w-fit px-2 py-[4px] border-[1px] rounded-lg border-[#AED998] bg-stone-800 text-primary">
            {last_updated.toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <div className="w-1/4" />
      )}

      <div className="hidden w-1/2 sm:block">
        {active_route === "home" ? (
          <div
            className="text-4xl font-black text-stone-900 my-font-electro md:text-5xl"
            style={{ cursor: active_route === "home" ? "default" : "pointer" }}
          >
            Order 41
          </div>
        ) : (
          <NavLink
            to="/"
            className="text-4xl font-black transition-all duration-300 text-stone-900 my-font-electro md:text-5xl hover:text-primary hover:font-light"
            style={{ cursor: active_route === "home" ? "default" : "pointer" }}
          >
            Order 41
          </NavLink>
        )}
      </div>

      <div className="flex items-center justify-center w-full h-full sm:justify-end sm:w-1/4">
        {/*      <NavLink
          to="/"
          className={`${
            active_route === "home"
              ? "text-primary font-bold"
              : "text-stone-200 hover:text-primary hover:font-bold"
          } text-lg sm:text-xl mx-2 sm:mx-3`}
        >
          HOME
        </NavLink>
        <NavLink
          to="/matchups"
          className={`${
            active_route === "matchups"
              ? "text-primary font-bold"
              : "text-stone-200 hover:text-primary hover:font-bold"
          } text-lg sm:text-xl mx-2 sm:mx-3`}
        >
          MATCHUPS
        </NavLink>

        <a
          href={HYPERLINK.sleeper}
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-lg sm:text-xl sm:mx-3 text-stone-200 hover:text-primary hover:font-bold"
        >
          SLEEPER
        </a>
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-lg sm:text-xl sm:mx-3 text-stone-200 hover:text-primary hover:font-bold"
        >
          DRIVE
        </a> */}

        <a
          href={HYPERLINK.sleeper}
          target="_blank"
          rel="noreferrer"
          className="w-[1.9rem] h-full pt-2 hover:scale-110 transition-transform"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-sleeper-green" />
        </a>
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="w-[2.4rem] h-full ml-4 pt-[9px] sm:pt-2.5 hover:scale-110 transition-transform"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-drive sm:bg-drive-black" />
        </a>
      </div>
    </div>
  );
}
