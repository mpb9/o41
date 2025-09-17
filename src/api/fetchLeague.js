import { API__SLEEPER } from "../utils/apiRoutes";
import { LEAGUE_ID } from "../utils/leagueInfo";

export default async function fetchLeague(leagueId = LEAGUE_ID) {
  try {
    const response = await fetch(API__SLEEPER.league(leagueId));
    if (!response.ok) {
      throw new Error(`Error fetching league: ${response.statusText}`);
    }
    const league = await response.json();
    return formatLeague(league);
  } catch (error) {
    console.error("fetchLeague:", error.message);
  }
}

function formatLeague(league) {
  return {
    avatar: league.avatar,
    draft_id: league.draft_id,
    league_id: league.league_id,
    metadata: league.metadata || {},
    name: league.name,
    previous_league_id: league.previous_league_id,
    roster_positions: league.roster_positions || [],
    scoring_settings: league.scoring_settings || {},
    season: league.season,
    season_type: league.season_type || "regular",
    settings: league.settings || {},
    status: league.status || "complete",
    total_rosters: league.total_rosters || 6,
  };
}
