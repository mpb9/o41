import PropTypes from "prop-types";
import { TABLE_CSS_CLASSES } from "../../styles";

StandingsTableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default function StandingsTableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className={TABLE_CSS_CLASSES.th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
