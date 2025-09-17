import { fetchRosters } from "../api/_helper";
import { Roster } from "../models/_helper";

export async function getAllRosters() {
  try {
    const rostersJson = await fetchRosters();
    if (!rostersJson) throw new Error("No roster data available.");
    return rostersJson.map((rosterJson) => new Roster(rosterJson));
  } catch (error) {
    console.error("getAllRosters:", error.message);
    return [];
  }
}

export function getRosterByUserId(userId = "", rosters = []) {
  return rosters.find((roster) => roster.user_id === userId) || null;
}

export function getRostersByMatchupId(
  matchupId = 1,
  rosters = [],
  matchups = []
) {
  const matchupRosters = matchups.filter(
    (matchup) => matchup.matchup_id === matchupId
  );
  const rosterIds = matchupRosters.map((matchup) => matchup.roster_id);
  return rosters.filter((roster) => rosterIds.includes(roster.roster_id));
}
