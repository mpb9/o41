import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../utils/leagueInfo";

export default function Header({ lastUpdated, activeRoute }) {
  return (
    <div className="flex items-center justify-center w-full text-center sm:bg-[#7e7a75] h-[3.25rem] sm:h-[3.5rem] px-0 sm:px-8 xl:px-10">
      {lastUpdated ? (
        <div className="hidden w-1/4 text-left cursor-default sm:block">
          <p className="text-xl md:text-xl my-font-terminess w-fit px-2 py-[4px] border-[1px] rounded-lg border-[#AED998] bg-stone-800 text-primary">
            {lastUpdated.toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <div className="w-1/4" />
      )}

      <div className="hidden w-1/2 sm:block">
        {activeRoute === "Home" ? (
          <div
            className="text-4xl font-bold text-stone-900 my-font-electro md:text-5xl"
            style={{ cursor: activeRoute === "Home" ? "default" : "pointer" }}
          >
            Order 41
          </div>
        ) : (
          <NavLink
            to="/"
            className="text-4xl font-bold transition-all duration-300 text-stone-900 my-font-electro md:text-5xl hover:text-primary hover:font-light"
            style={{ cursor: activeRoute === "Home" ? "default" : "pointer" }}
          >
            Order 41
          </NavLink>
        )}
      </div>

      <div className="flex items-center justify-center w-full h-full sm:justify-end sm:w-1/4">
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
