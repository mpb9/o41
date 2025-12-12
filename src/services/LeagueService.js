import { fetchLeague } from "../api/_helper";
import { LEAGUE_ID } from "../constants/leagueInfo";
import { League } from "../models/_helper";

export async function getAllLeagues() {
  try {
    let leagues = [];
    let previousLeagueId = LEAGUE_ID;
    while (previousLeagueId !== null) {
      let league = await getLeagueByLeagueId(previousLeagueId);
      if (!league) throw new Error("No league data available.");
      leagues.push(league);
      previousLeagueId = league.previous_league_id;
    }
    return leagues;
  } catch (err) {
    console.error("getLeagues:", err.message);
    return null;
  }
}

export async function getLeagueByLeagueId(league_id = LEAGUE_ID) {
  try {
    const leagueJson = await fetchLeague(league_id);
    if (!leagueJson) throw new Error("No league data available.");
    return new League(leagueJson);
  } catch (err) {
    console.error("getLeagueByLeagueId:", err.message);
    return null;
  }
}

export function getLeagueBySeason(leagues = [], target_season = 0) {
  const league = leagues.find(({ season }) => {
    return season === target_season;
  });
  return league;
}
