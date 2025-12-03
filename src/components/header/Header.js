import { NavLink } from "react-router-dom";
import { HEADER_LINK_CLASSNAMES } from "../../utils/styles";
import { HeaderDesktop, HeaderMobile } from "../_helper";

export default function Header({ last_updated, active_route }) {
  if (active_route !== "not_found") {
    return (
      <>
        <HeaderMobile active_route={active_route}></HeaderMobile>
        <HeaderDesktop
          last_updated={last_updated}
          active_route={active_route}
        ></HeaderDesktop>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center w-full text-center bg-stone-950 h-[3.25rem] sm:h-[3.5rem] px-2 sm:px-8 xl:px-8">
      <NavLink
        to="/"
        className={`${
          active_route === "matchups"
            ? HEADER_LINK_CLASSNAMES.DESKTOP.active
            : "text-stone-200 hover:text-primary hover:font-bold text-5xl my-font-electro"
        } `}
      >
        ORDER 41
      </NavLink>
    </div>
  );
}
