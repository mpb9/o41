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
      <div className="flex items-center justify-center w-full h-full sm:justify-end sm:w-3/4">
        <NavLink
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
          className="w-[1.75rem] h-full pt-2 hover:scale-110 transition-transform mx-3"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-sleeper-green" />
        </a>
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="w-[2.1rem] sm:w-[2.25rem] h-full pt-[13px] sm:ml-1 sm:pt-[13px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-drive-black" />
        </a>
      </div>
    </div>
  );
}
