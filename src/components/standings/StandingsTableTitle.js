import PropTypes from "prop-types";

StandingsTableTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default function StandingsTableTitle({ title }) {
  return (
    <div className="flex justify-center mt-4 mb-0">
      <h2 className="px-4 py-1 text-2xl uppercase border border-b-0 rounded-t-sm shadow-lg sm:border-2 sm:border-b-0 xl:border-b-0 sm:text-2xl border-secondary shadow-dark text-primary bg-dark">
        {title}
      </h2>
    </div>
  );
}
