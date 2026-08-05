import { useState } from "react";
import { HeaderMobileNavLink } from "../../_helper";
export default function HeaderMobileDropdownMenu({ active_route }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        className="brightness-110 mx-16 transition-transform"
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
          <div className="top-[3.25rem] left-0 z-10 absolute bg-[#aed99866] w-full h-[calc(100vh-3.25rem)]"></div>
          <div className="top-[3.125rem] left-[28vw] z-10 absolute flex flex-col justify-center items-center bg-dark pt-3 pb-5 border-4 border-secondary border-t-dark rounded-b-lg w-[44vw]">
            <HeaderMobileNavLink
              to="/dynasty"
              active_route={active_route}
              label="DYNASTY"
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
