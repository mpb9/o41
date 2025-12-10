import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { League, Roster, User } from "../../models/_helper";
import { Loading } from "../../pages/_helper";
import {
  getAllRosters,
  getAllUsersByRosters,
  getLeagueBySeason,
  getRostersByDivisionId,
} from "../../services/_helper";
import { LEAGUE_ID } from "../../utils/leagueInfo";
import { TABLE_CLASSNAMES } from "../../utils/styles";
import {
  StandingsSelector,
  StandingsTableHeader,
  StandingsTableTitle,
} from "../_helper";

StandingsSeason.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.instanceOf(League)).isRequired,
  rosters: PropTypes.arrayOf(PropTypes.instanceOf(Roster)).isRequired,
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
};
export default function StandingsSeason({ leagues, rosters, users }) {
  const [divisionRosters, setDivisionRosters] = useState(null);
  const [divisionUsers, setDivisionUsers] = useState(null);
  const [activeLeague, setActiveLeague] = useState(leagues[0]);
  const [activeRosters, setActiveRosters] = useState(rosters);
  const headers = [
    <NavLink to="/teams" className="hover:underline">
      Team
    </NavLink>,
    "W",
    "L",
    "PF",
    "pPF",
    "PA",
    "Streak",
    "FAAB",
  ];

  useEffect(() => {
    function getDivisionizedData() {
      let updatedDivisionRosters = [
        getRostersByDivisionId(1, activeRosters),
        getRostersByDivisionId(2, activeRosters),
      ];
      updatedDivisionRosters[0].sort((a, b) => b.record.wins - a.record.wins);
      updatedDivisionRosters[1].sort((a, b) => b.record.wins - a.record.wins);
      setDivisionRosters(updatedDivisionRosters);
    }
    getDivisionizedData();
  }, [activeRosters]);

  useEffect(() => {
    if (divisionRosters !== null) {
      setDivisionUsers([
        getAllUsersByRosters(divisionRosters[0], users),
        getAllUsersByRosters(divisionRosters[1], users),
      ]);
    }
  }, [divisionRosters]);

  useEffect(() => {
    async function getRostersByLeagueId(league_id = LEAGUE_ID) {
      try {
        const updatedRosters = await getAllRosters(league_id);
        if (!updatedRosters || updatedRosters.length === 0)
          throw new Error("No roster data available.");
        setActiveRosters(updatedRosters);
      } catch (err) {
        console.error("StandingsSeasons: Error fetching rosters.");
      }
    }
    getRostersByLeagueId(activeLeague.league_id);
  }, [activeLeague]);

  function handleSeasonChange(updatedSeason) {
    const updatedLeague = getLeagueBySeason(leagues, Number(updatedSeason));
    setActiveLeague(updatedLeague);
  }

  if (divisionRosters !== null && divisionUsers !== null) {
    return (
      <>
        <div className="flex items-center justify-center mt-4">
          <StandingsSelector
            options={[2025, 2024, 2023]}
            additional_text=" SEASON"
            onStandingsChange={handleSeasonChange}
          />
        </div>

        <StandingsTableTitle title={`${leagues[0].metadata.division_2}`} />
        <div className={TABLE_CLASSNAMES.flex_container}>
          <div className={TABLE_CLASSNAMES.scroll_container}>
            <table className={TABLE_CLASSNAMES.table}>
              <StandingsTableHeader headers={headers} />
              <tbody>
                {divisionRosters[1].map((roster, index) => (
                  <tr key={roster.user_id}>
                    <td className={TABLE_CLASSNAMES.td}>
                      {divisionUsers[1][index].team_name}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.wins}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.losses}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>{roster.pts.fpts}</td>
                    <td className={TABLE_CLASSNAMES.td}>{roster.pts.ppts}</td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.pts.fpts_against}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.streak}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      ${100 - roster.waiver_budget_used}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <StandingsTableTitle title={leagues[0].metadata.division_1} />
        <div className={TABLE_CLASSNAMES.flex_container}>
          <div className={TABLE_CLASSNAMES.scroll_container}>
            <table className={TABLE_CLASSNAMES.table}>
              <StandingsTableHeader headers={headers} />
              <tbody>
                {divisionRosters[0].map((roster, index) => (
                  <tr key={roster.user_id}>
                    <td className={TABLE_CLASSNAMES.td}>
                      {divisionUsers[0][index].team_name}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.wins}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.losses}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>{roster.pts.fpts}</td>
                    <td className={TABLE_CLASSNAMES.td}>{roster.pts.ppts}</td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.pts.fpts_against}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      {roster.record.streak}
                    </td>
                    <td className={TABLE_CLASSNAMES.td}>
                      ${100 - roster.waiver_budget_used}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return <Loading />;
}
