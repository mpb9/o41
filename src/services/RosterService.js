import { fetchRosters } from "../api/_helper";
import { Roster } from "../models/_helper";
import { LEAGUE_ID } from "../utils/leagueInfo";

export async function getAllRosters(league_id = LEAGUE_ID) {
  try {
    const rostersJson = await fetchRosters(league_id);
    if (!rostersJson) throw new Error("No roster data available.");
    return rostersJson.map((rosterJson) => new Roster(rosterJson));
  } catch (error) {
    console.error("getAllRosters:", error.message);
    return [];
  }
}

export function getRostersByDivisionId(division_id = null, rosters = []) {
  const divisionRosters = rosters.filter(
    (roster) => roster.division_id === division_id
  );
  return divisionRosters;
}

export function getRosterByUserId(user_id = "", rosters = []) {
  return rosters.find((roster) => roster.user_id === user_id) || null;
}

export function getRostersByMatchupId(
  matchup_id = 1,
  rosters = [],
  matchups = []
) {
  const matchupRosters = matchups.filter(
    (matchup) => matchup.matchup_id === matchup_id
  );
  const rosterIds = matchupRosters.map((matchup) => matchup.roster_id);
  return rosters.filter((roster) => rosterIds.includes(roster.roster_id));
}
