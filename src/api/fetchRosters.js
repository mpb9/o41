import { API__SLEEPER } from "../utils/apiRoutes";

export default async function fetchRosters() {
  try {
    const response = await fetch(API__SLEEPER.rosters);
    if (!response.ok) {
      throw new Error(`Error fetching rosters: ${response.statusText}`);
    }
    const rosters = await response.json();
    return rosters;
    // return formatRosters(rosters);
  } catch (error) {
    console.error("fetchRosters:", error.message);
  }
}

function formatRosters(rosters) {
  return rosters.map((roster) => ({
    roster_id: roster.roster_id,
    user_id: roster.owner_id,
    players: roster.players,
    starters: roster.starters,
    reserve: roster.reserve,
    taxi: roster.taxi,
    settings: roster.settings,
  }));
}
