import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { League, Roster, User } from "../../models/_helper";
import { Loading } from "../../pages/_helper";
import {
  getAllUsersByRosters,
  getRostersByDivisionId,
} from "../../services/_helper";
import { TABLE_CSS_CLASSES } from "../../styles";
import { StandingsTableHeader, StandingsTableTitle } from "../_helper";

StandingsLeague.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.instanceOf(League)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  nfl_state: PropTypes.object.isRequired,
};
export default function StandingsLeague({
  leagues,
  rosters,
  users,
  nfl_state,
}) {
  const [divisionRosters, setDivisionRosters] = useState(null);
  const [divisionUsers, setDivisionUsers] = useState(null);
  const headers = [
    <NavLink to="/teams" className="hover:underline">
      Team
    </NavLink>,
    "Dynasty Titles",
    "Season Titles",
    "Toilets",
    "W",
    "L",
    "PF",
    "pPF",
    "PA",
  ];

  useEffect(() => {
    function getDivisionizedData() {
      let updatedDivisionRosters = [
        getRostersByDivisionId(1, rosters),
        getRostersByDivisionId(2, rosters),
      ];

      updatedDivisionRosters[0].sort((a, b) => b.record.wins - a.record.wins);
      updatedDivisionRosters[1].sort((a, b) => b.record.wins - a.record.wins);

      setDivisionRosters(updatedDivisionRosters);

      setDivisionUsers([
        getAllUsersByRosters(updatedDivisionRosters[0], users),
        getAllUsersByRosters(updatedDivisionRosters[1], users),
      ]);
    }
    getDivisionizedData();
  }, [rosters, users]);

  if (divisionRosters !== null && divisionUsers !== null) {
    return (
      <>
        <StandingsTableTitle title="All-Time" />
        <div className="flex justify-center w-full">
          <div className="px-2 overflow-x-auto no-scrollbar">
            <table className="border-2 border-collapse table-auto sm:border-4 border-secondary">
              <StandingsTableHeader headers={headers} />
              <tbody>
                <tr>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return <Loading />;
}
