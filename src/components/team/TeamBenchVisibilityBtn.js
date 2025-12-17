import { Eye, EyeClosed, EyeSlash } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { TW_COLORS } from "../../styles";

const HIDDEN_ICON = (
  <EyeClosed
    size="1.5rem"
    weight="duotone"
    color="#776"
    className="sm:group-hover:hidden mx-3 2xl:mx-8 xl:mx-4 sm:transition-transform sm:duration-300 sm:ease-in-out"
  />
);
const HIDDEN_HOVER_ICON = (
  <Eye
    size="1.5rem"
    weight="duotone"
    color={TW_COLORS.primary}
    className="hidden sm:group-hover:block mx-3 2xl:mx-8 xl:mx-4 sm:transition-transform sm:duration-300 sm:ease-in-out"
  />
);
const VISIBLE_HOVER_ICON = (
  <EyeClosed
    size="1.5rem"
    weight="duotone"
    color={TW_COLORS.primary}
    className="hidden sm:group-hover:block mx-3 2xl:mx-8 xl:mx-4 sm:transition-transform sm:duration-300 sm:ease-in-out"
  />
);

TeamBenchVisibilityBtn.propTypes = {
  show_bench: PropTypes.bool,
  onBenchVisibilityChange: PropTypes.func,
};
export default function TeamBenchVisibilityBtn({
  show_bench = false,
  onBenchVisibilityChange,
}) {
  function handleBenchVisibilityChange(updatedShowBench) {
    onBenchVisibilityChange(updatedShowBench);
  }

  return (
    <div className="flex flex-col items-center w-full">
      {!show_bench ? (
        <div
          className="group flex justify-between items-center bg-stone-900 px-2 py-1.5 border-2 border-stone-600 rounded-b-lg w-full cursor-pointer"
          onClick={() => handleBenchVisibilityChange(!show_bench)}
        >
          {HIDDEN_ICON}
          {HIDDEN_HOVER_ICON}
          <span className="text-[0.85rem] text-secondary sm:group-hover:text-primary sm:text-sm sm:transition-colors">
            BENCH / IR / TAXI
          </span>
          {HIDDEN_ICON}
          {HIDDEN_HOVER_ICON}
        </div>
      ) : (
        <div
          className="group flex justify-center sm:hover:justify-between items-center bg-stone-900 px-2 py-1.5 border-2 border-stone-600 border-b-1 w-full text-light sm:hover:text-stone-500 sm:transition-colors cursor-pointer"
          onClick={() => onBenchVisibilityChange(!show_bench)}
        >
          {VISIBLE_HOVER_ICON}
          <span className="text-light sm:group-hover:text-secondary decoration-primary sm:group-hover:line-through tracking-widest">
            BENCH
          </span>
          {VISIBLE_HOVER_ICON}
        </div>
      )}
    </div>
  );
}
