import PropTypes from "prop-types";

StandingsSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  additional_text: PropTypes.string,
  onStandingsChange: PropTypes.func,
};

export default function StandingsSelector({
  options,
  additional_text = "",
  onStandingsChange,
}) {
  function handleChange(e) {
    onStandingsChange(e.target.value);
  }

  return (
    <div>
      <div className="relative inline-block mx-3 text-lg text-left md:text-xl 2xl:text-2xl">
        <select
          onChange={handleChange}
          className="block w-full py-1 pl-3 pr-10 leading-tight border-2 shadow-md appearance-none cursor-pointer shadow-dark rounded-xl text-dark bg-primary border-dark hover:bg-transparent active:bg-primary focus:outline-none focus:shadow-outline"
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
              {additional_text}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-dark">
          <svg
            className="w-5 h-5 fill-current lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
