import { fetchMatchups } from "../api/_helper";
import { Matchup } from "../models/_helper";
import { getRosterByUserId } from "./_helper";

export async function getAllMatchups() {
  try {
    const matchupsJson = await fetchMatchups();
    if (!matchupsJson) throw new Error("No matchup data available.");
    return matchupsJson.map((matchupJson) => new Matchup(matchupJson));
  } catch (error) {
    console.error("getAllMatchups:", error.message);
    return [];
  }
}

export function getMatchupByUserId(user_id = "", rosters = [], matchups = []) {
  const roster = getRosterByUserId(user_id, rosters);
  return matchups.find((matchup) => matchup.roster_id === roster.roster_id);
}

export function getMatchupByRosterId(roster_id = 0, matchups = []) {
  return matchups.find((matchup) => matchup.roster_id === roster_id) || null;
}

export function getMatchupsByMatchupId(matchup_id = 1, matchups = []) {
  return matchups.filter((matchup) => matchup.matchup_id === matchup_id);
}
