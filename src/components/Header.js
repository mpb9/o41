import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../utils/leagueInfo";

export default function Header({ lastUpdated, activeRoute }) {
  return (
    <div className="flex items-center justify-center w-full text-center sm:bg-[#7e7a75] h-[4rem] px-0 sm:px-8 xl:px-10">
      {lastUpdated ? (
        <div className="hidden w-1/4 text-left cursor-default sm:block">
          <p className="text-xl md:text-2xl my-font-terminess w-fit px-2 py-[6px] border-[1px] rounded-lg border-[#AED998] bg-stone-800 text-primary">
            {lastUpdated.toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <div className="w-1/4" />
      )}

      <div className="hidden w-1/2 sm:block">
        {activeRoute === "Home" ? (
          <div
            className="text-[3.5rem] text-stone-900 font-bold my-font-electro md:text-[3.5rem] lg:text-[3.75rem]"
            style={{ cursor: activeRoute === "Home" ? "default" : "pointer" }}
          >
            Order 41
          </div>
        ) : (
          <NavLink
            to="/"
            className="text-[3.5rem] text-stone-900 font-bold my-font-electro md:text-[3.5rem] lg:text-[3.75rem] transition-all hover:text-primary hover:font-light duration-300"
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
          className="w-[2.75rem] h-full py-[12px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-sleeper-green" />
        </a>
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="w-[2.75rem] h-full pt-[11px] ml-4 pb-[5px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full bg-no-repeat bg-contain bg-google-drive" />
        </a>
      </div>
    </div>
  );
}
