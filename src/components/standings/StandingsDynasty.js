import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DYNASTIES } from "../../constants/leagueInfo";
import { League, Roster, User } from "../../models/_helper";
import { Loading } from "../../pages/_helper";
import {} from "../../services/_helper";
import { TABLE_CSS_CLASSES } from "../../styles";
import {
  StandingsSelector,
  StandingsTableHeader,
  StandingsTableTitle,
} from "../_helper";

StandingsDynasty.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.instanceOf(League)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  nfl_state: PropTypes.object.isRequired,
};
export default function StandingsDynasty({
  leagues,
  rosters,
  users,
  nfl_state,
}) {
  const [activeDynasty, setActiveDynasty] = useState(
    DYNASTIES[DYNASTIES.length - 1]
  );
  // const [dynastyData, setDynastyData] = useState(null);
  const headers = [
    <NavLink to="/teams" className="hover:underline">
      Team
    </NavLink>,
    "Titles",
    "Toilets",
    "W",
    "L",
    "PF",
    "pPF",
    "PA",
  ];
  useEffect(() => {
    function updateDynastyData() {}
    updateDynastyData();
  }, [activeDynasty]);

  function handleDynastyChange(updatedDynastyName) {
    const updatedDynasty = DYNASTIES.find(
      ({ name }) => name === updatedDynastyName
    );
    setActiveDynasty(updatedDynasty);
  }

  if (activeDynasty !== null) {
    return (
      <>
        <div className="flex justify-center items-center mt-4">
          <StandingsSelector
            options={DYNASTIES.map((dynasty) => dynasty.name)}
            onStandingsChange={handleDynastyChange}
          />
        </div>
        <StandingsTableTitle
          title={`${activeDynasty.season_start}-${
            activeDynasty.season_end === null
              ? "??"
              : activeDynasty.season_end - 2000
          }`}
        />
        <div className={TABLE_CSS_CLASSES.flex_container}>
          <div className={TABLE_CSS_CLASSES.scroll_container}>
            <table className={TABLE_CSS_CLASSES.table}>
              <StandingsTableHeader headers={headers} />
              <tbody>
                <tr>
                  <td className={TABLE_CSS_CLASSES.td + " cursor-pointer"}>
                    TEAM_NAME
                  </td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                  <td className={TABLE_CSS_CLASSES.td}>tbd</td>
                </tr>
                {/* {dynastyData.map((team, index) => (
                  <></>
                  <tr key={team.user_id}>
                    <td className="bg-dark px-1.5 sm:px-2.5 xl:px-4 py-1 border border-secondary sm:border-2 text-light text-sm sm:text-base text-center whitespace-nowrap">
                      1
                    </td>
                    <td className={TABLE_CSS_CLASSES.td}>{team.record.wins}</td>
                    <td className={TABLE_CSS_CLASSES.td}>
                      {team.record.losses}
                    </td>
                    <td className={TABLE_CSS_CLASSES.td}>
                      {team.record.streak}
                    </td>
                    <td className={TABLE_CSS_CLASSES.td}>{team.pts.fpts}</td>
                    <td className={TABLE_CSS_CLASSES.td}>{team.pts.ppts}</td>
                    <td className={TABLE_CSS_CLASSES.td}>
                      {team.pts.fpts_against}
                    </td>
                    <td className={TABLE_CSS_CLASSES.td}>
                      ${100 - team.waiver_budget_used}
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return <Loading />;
}
