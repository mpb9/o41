import PropTypes from "prop-types";

StandingsTableTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default function StandingsTableTitle({ title }) {
  return (
    <div className="flex justify-center mt-4 mb-1">
      <h2 className="text-2xl uppercase sm:text-3xl text-dark">{title}</h2>
    </div>
  );
}
