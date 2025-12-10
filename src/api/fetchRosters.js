import { API__SLEEPER } from "../utils/apiRoutes";
import { LEAGUE_ID } from "../utils/leagueInfo";

export default async function fetchRosters(league_id = LEAGUE_ID) {
  try {
    const response = await fetch(API__SLEEPER.rosters(league_id));
    if (!response.ok) {
      throw new Error(`Error fetching rosters: ${response.statusText}`);
    }
    const rosters = await response.json();
    return rosters;
  } catch (error) {
    console.error("fetchRosters:", error.message);
  }
}
