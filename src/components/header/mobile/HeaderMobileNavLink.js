import { NavLink } from "react-router-dom";
import { HEADER_LINK_CLASSNAMES } from "../../../utils/styles";
export default function HeaderMobileNavLink({ to, active_route, label }) {
  if (to === "/" && active_route === "matchups") {
    return (
      <NavLink
        to={to}
        className={`${HEADER_LINK_CLASSNAMES.DESKTOP.active} text-lg sm:text-xl my-1.5`}
      >
        {label}
      </NavLink>
    );
  }
  return (
    <NavLink
      to={to}
      className={`${
        active_route === to.replace("/", "")
          ? HEADER_LINK_CLASSNAMES.DESKTOP.active
          : HEADER_LINK_CLASSNAMES.DESKTOP.inactive
      } text-lg sm:text-xl my-1.5`}
    >
      {label}
    </NavLink>
  );
}
