import { API__SLEEPER } from "../utils/apiRoutes";
import { PLAYOFF_MATCHUPS } from "../utils/playoffInfo";
import { fetchNflState } from "./_helper";

export default async function fetchMatchups(nfl_state = null) {
  try {
    const nflState = nfl_state || (await fetchNflState());
    if (!nflState) throw new Error("NFL state data is unavailable.");
    if (nflState.season_type !== "regular") return getPlayoffMatchups(nflState);

    const sleeperMatchups = await fetchSleeperMatchups(nflState.display_week);
    if (!sleeperMatchups)
      throw new Error("Sleeper matchup data is unavailable.");
    return sleeperMatchups;
  } catch (error) {
    console.error("fetchMatchups:", error.message);
  }
}

function getPlayoffMatchups(nflState = {}) {
  const { season, week } = nflState;
  const playoffMatchups =
    PLAYOFF_MATCHUPS.find(
      (matchups) => matchups.season === season && matchups.week === week
    ) || null;
  if (playoffMatchups) return playoffMatchups.matchups;
  return null;
}

async function fetchSleeperMatchups(week = "") {
  try {
    const response = await fetch(API__SLEEPER.matchups(week));
    if (!response.ok) {
      throw new Error(`Error fetching matchups: ${response.statusText}`);
    }
    const matchups = await response.json();
    return matchups;
  } catch (error) {
    console.error("fetchSleeperMatchups:", error.message);
  }
}
