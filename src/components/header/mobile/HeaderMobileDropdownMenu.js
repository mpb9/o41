import { useState } from "react";
import { HeaderMobileNavLink } from "../../_helper";
export default function HeaderMobileDropdownMenu({ active_route }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        className="mx-16 transition-transform brightness-110"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          src="/img/logo-secondary.png"
          alt="ORDER 41"
          width={36}
          className="rounded-sm"
        />
      </button>

      {showDropdown ? (
        <>
          <div className="absolute z-10 top-[3.25rem] left-0 w-full h-[calc(100vh-3.25rem)] bg-[#aed99866]"></div>
          <div className="absolute z-10 left-[28vw] w-[44vw] flex flex-col items-center justify-center border-4 top-[3.125rem] pt-3 pb-5 bg-dark border-secondary border-t-dark rounded-b-lg">
            <HeaderMobileNavLink
              to="/league"
              active_route={active_route}
              label="LEAGUE"
            />
            <HeaderMobileNavLink
              to="/"
              active_route={active_route}
              label="MATCHUPS"
            />
            <HeaderMobileNavLink
              to="/teams"
              active_route={active_route}
              label="TEAMS"
            />
            <HeaderMobileNavLink
              to="/standings"
              active_route={active_route}
              label="STANDINGS"
            />
            <HeaderMobileNavLink
              to="/bylaws"
              active_route={active_route}
              label="BYLAWS"
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
