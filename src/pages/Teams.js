import PropTypes from "prop-types";
import { Header, TypographyTitle } from "../components/_helper";

Teams.propTypes = {
  rosters: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};
export default function Teams({ rosters, users }) {
  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header active_route="teams" />
      <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
        <TypographyTitle text="TEAMS" />
      </div>
    </div>
  );
}
