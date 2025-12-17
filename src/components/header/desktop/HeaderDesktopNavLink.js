import { NavLink } from "react-router-dom";
import { HEADER_LINK_CSS_CLASSES } from "../../../styles";
export default function HeaderDesktopNavLink({ to, active_route, label }) {
  if (to === "/" && active_route === "matchups") {
    return (
      <NavLink
        to={to}
        className={`${HEADER_LINK_CSS_CLASSES.DESKTOP.active} text-lg sm:text-xl mx-1.5 md:mx-2 lg:mx-3 xl:mx-4`}
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
      } text-lg sm:text-lg md:text-xl mx-1.5 md:mx-2 lg:mx-3 xl:mx-4`}
    >
      {label}
    </NavLink>
  );
}
