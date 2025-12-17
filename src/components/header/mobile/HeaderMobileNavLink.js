import { NavLink } from "react-router-dom";
import { HEADER_LINK_CSS_CLASSES } from "../../../styles";
export default function HeaderMobileNavLink({ to, active_route, label }) {
  if (to === "/" && active_route === "matchups") {
    return (
      <NavLink
        to={to}
        className={`${HEADER_LINK_CSS_CLASSES.DESKTOP.active} text-lg sm:text-xl my-1.5`}
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
          ? HEADER_LINK_CSS_CLASSES.DESKTOP.active
          : HEADER_LINK_CSS_CLASSES.DESKTOP.inactive
      } text-lg sm:text-xl my-1.5`}
    >
      {label}
    </NavLink>
  );
}
