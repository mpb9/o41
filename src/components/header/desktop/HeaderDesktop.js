import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../../../constants/leagueInfo";
import { HeaderDesktopNavLink } from "../../_helper";

export default function HeaderDesktop({ last_updated, active_route }) {
  return (
    <div className="hidden sm:flex justify-center items-center bg-dark px-2 sm:px-2 lg:px-8 xl:px-8 border-secondary border-b-1 w-full h-[3.25rem] sm:h-[3.5rem] text-center">
      {last_updated ? (
        <div className="hidden lg:block w-1/4 text-left cursor-default">
          <p className="bg-stone-800 px-2 py-[4px] border-[#AED998] border-[1px] rounded-lg w-fit my-font-terminess text-primary text-xl md:text-xl">
            {last_updated.toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <div className="w-[1px] lg:w-1/4" />
      )}

      {/* NAV LINKS */}
      <div className="flex justify-center items-center w-5/6 md:w-4/5 lg:w-1/2 h-full">
        <HeaderDesktopNavLink
          to="/dynasty"
          active_route={active_route}
          label="DYNASTY"
        />
        <HeaderDesktopNavLink
          to="/"
          active_route={active_route}
          label="MATCHUPS"
        />
        <HeaderDesktopNavLink
          to="/teams"
          active_route={active_route}
          label="TEAMS"
        />
        <HeaderDesktopNavLink
          to="/standings"
          active_route={active_route}
          label="STANDINGS"
        />
        <HeaderDesktopNavLink
          to="/bylaws"
          active_route={active_route}
          label="BYLAWS"
        />
      </div>

      {/* ICONS */}
      <div className="flex justify-end items-center lg:ml-6 w-1/6 md:w-1/5 lg:w-1/4 h-full">
        <a
          href={HYPERLINK.sleeper}
          target="_blank"
          rel="noreferrer"
          className="mx-1 md:mx-1.5 sm:hover:scale-110 transition-transform"
        >
          <img
            src="/img/companies/sleeper-green.png"
            alt="Sleeper"
            width={34}
          />
        </a>
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="mx-1.5 md:mx-2.5 sm:hover:scale-110 transition-transform"
        >
          <img
            src="/img/companies/drive.png"
            alt="Google Drive"
            width={44}
            className="pt-[2px]"
          />
        </a>
        <NavLink
          to="/"
          className="brightness-110 mx-[5px] md:mx-2 sm:hover:scale-110 transition-transform"
        >
          <img
            src="/img/logo-secondary.png"
            alt="ORDER 41"
            width={38}
            className="rounded"
          />
        </NavLink>
      </div>
    </div>
  );
}
