import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../../../constants/leagueInfo";
import { HeaderDesktopNavLink } from "../../_helper";

export default function HeaderDesktop({ last_updated, active_route }) {
  return (
    <div className="hidden sm:flex items-center justify-center w-full text-center bg-dark h-[3.25rem] sm:h-[3.5rem] px-2 sm:px-2 lg:px-8 xl:px-8 border-b-1 border-secondary">
      {last_updated ? (
        <div className="hidden w-1/4 text-left cursor-default lg:block">
          <p className="text-xl md:text-xl my-font-terminess w-fit px-2 py-[4px] border-[1px] rounded-lg border-[#AED998] bg-stone-800 text-primary">
            {last_updated.toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <div className="w-[1px] lg:w-1/4" />
      )}

      {/* NAV LINKS */}
      <div className="flex items-center justify-center w-5/6 h-full md:w-4/5 lg:w-1/2">
        <HeaderDesktopNavLink
          to="/league"
          active_route={active_route}
          label="LEAGUE"
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
      <div className="flex items-center justify-end w-1/6 h-full md:w-1/5 lg:w-1/4 lg:ml-6">
        <a
          href={HYPERLINK.sleeper}
          target="_blank"
          rel="noreferrer"
          className="mx-1 transition-transform md:mx-1.5 sm:hover:scale-110"
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
          className="mx-1.5 md:mx-2.5 transition-transform sm:hover:scale-110"
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
          className="mx-[5px] transition-transform md:mx-2 sm:hover:scale-110 brightness-110"
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
