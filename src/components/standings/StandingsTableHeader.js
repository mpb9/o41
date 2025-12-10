import PropTypes from "prop-types";
import { TABLE_CLASSNAMES } from "../../utils/styles";

StandingsTableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default function StandingsTableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className={TABLE_CLASSNAMES.th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
