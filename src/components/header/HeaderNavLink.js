import { NavLink } from "react-router-dom";
import { HEADER_LINK_CLASSNAMES } from "../../utils/styles";
export default function HeaderNavLink({ to, active_route, label }) {
  if (to !== "/" || active_route !== "home") {
    return (
      <NavLink
        to={to}
        className={`${
          active_route === to.replace("/", "")
            ? HEADER_LINK_CLASSNAMES.DESKTOP.active
            : HEADER_LINK_CLASSNAMES.DESKTOP.inactive
        } text-lg sm:text-xl mx-2 sm:mx-3`}
      >
        {label}
      </NavLink>
    );
  }
  return null;
}
