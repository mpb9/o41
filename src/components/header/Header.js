import { NavLink } from "react-router-dom";
import { HYPERLINK } from "../../utils/leagueInfo";
import { HEADER_LINK_CLASSNAMES } from "../../utils/styles";
import { HeaderNavLink } from "../_helper";

export default function Header({ last_updated, active_route }) {
  if (active_route !== "not_found") {
    return (
      <div className="flex items-center justify-center w-full text-center bg-stone-950 h-[3.25rem] sm:h-[3.5rem] px-2 sm:px-8 xl:px-8 border-b-1 border-stone-600">
        {last_updated ? (
          <div className="hidden w-1/4 text-left cursor-default sm:block">
            <p className="text-xl md:text-xl my-font-terminess w-fit px-2 py-[4px] border-[1px] rounded-lg border-[#AED998] bg-stone-800 text-primary">
              {last_updated.toLocaleTimeString()}
            </p>
          </div>
        ) : (
          <div className="w-1/4" />
        )}

        {/* NAV LINKS */}
        <div className="flex items-center justify-center w-[65%] h-full sm:w-1/2">
          <HeaderNavLink to="/" active_route={active_route} label="HOME" />
          <HeaderNavLink
            to="/matchups"
            active_route={active_route}
            label="MATCHUPS"
          />
          <HeaderNavLink
            to="/teams"
            active_route={active_route}
            label="TEAMS"
          />
          <HeaderNavLink
            to="/standings"
            active_route={active_route}
            label="STANDINGS"
          />
          <HeaderNavLink
            to="/bylaws"
            active_route={active_route}
            label="BYLAWS"
          />
        </div>

        {/* ICONS */}
        <div className="flex items-center justify-end w-[35%] h-full sm:w-1/4 sm:ml-6">
          <a
            href={HYPERLINK.sleeper}
            target="_blank"
            rel="noreferrer"
            className="mx-1 transition-transform sm:mx-1.5 sm:hover:scale-110"
          >
            <img src="/img/sleeper-green.png" alt="Sleeper" width={34} />
          </a>
          <a
            href={HYPERLINK.drive}
            target="_blank"
            rel="noreferrer"
            className="mx-1.5 sm:mx-2.5 transition-transform sm:hover:scale-110"
          >
            <img
              src="/img/drive.png"
              alt="Google Drive"
              width={44}
              className="pt-[2px]"
            />
          </a>
          <NavLink
            to="/"
            className="mx-[5px] transition-transform sm:mx-2 sm:hover:scale-110 brightness-110"
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

  // MARK: NOT FOUND
  return (
    <div className="flex items-center justify-center w-full text-center bg-stone-950 h-[3.25rem] sm:h-[3.5rem] px-2 sm:px-8 xl:px-8">
      <NavLink
        to="/"
        className={`${
          active_route === "home"
            ? HEADER_LINK_CLASSNAMES.DESKTOP.active
            : "text-stone-200 hover:text-primary hover:font-bold text-5xl my-font-electro"
        } `}
      >
        ORDER 41
      </NavLink>
    </div>
  );
}
