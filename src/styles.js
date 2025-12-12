export const POSITION_COLORS = {
  QB: "#ff757cDD",
  RB: "#98FB98DD",
  WR: "#B0E0E6DD",
  TE: "#ffa973DD",
  IDP: "#f59cff",
  DEF: "#ffff7fdd",
  DST: "#ffff7fdd",
  K: "#a39bfcdd",
  NA: "#A7A19FDD",
};

export const PTS_COLORS = {
  really_low: "#ff757cC0",
  low: "#ffa973C0",
  medium_low: "#ffff7fC0",
  medium_high: "#B0E0E6C0",
  high: "#98FB98C0",
  NA: "#A7A19FC0",
};

export const HEADER_LINK_CLASSNAMES = {
  DESKTOP: {
    active: "text-primary font-bold",
    inactive: "text-stone-200 hover:text-primary hover:font-bold",
  },
  MOBILE: {
    active: "text-primary font-bold",
    inactive: "text-stone-200 hover:text-primary hover:font-bold",
  },
};

export const TABLE_CLASSNAMES = {
  flex_container: "flex justify-center w-full",
  scroll_container: "mx-2 overflow-x-auto no-scrollbar shadow-lg shadow-dark",
  table: "border border-collapse table-auto md:border-4 border-secondary",
  th: "text-base xl:text-[1.1rem] px-2 sm:px-2.5 xl:px-3 py-1 xl:py-1.5 border sm:border-2 border-secondary bg-dark text-primary",
  td: "text-sm sm:text-base px-1.5 sm:px-2.5 xl:px-4 py-1 bg-dark border sm:border-2 border-secondary text-center whitespace-nowrap text-light",
};
