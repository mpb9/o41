import { Header, TypographyTitle } from "../components/_helper";
import PropTypes from "prop-types";

Standings.propTypes = {
  users: PropTypes.array.isRequired,
};
export default function Standings({ users }) {
  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header active_route="standings" />
      <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
        <TypographyTitle text="STANDINGS" />
      </div>
    </div>
  );
}
