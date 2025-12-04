import { fetchLeague } from "../api/_helper";
import {
  League,
  LeagueMetadata,
  LeagueSettings,
  ScoringSettings,
} from "../models/_helper";

export async function getLeague() {
  try {
    const leagueJson = await fetchLeague();
    if (!leagueJson) throw new Error("No league data available.");
    console.log(leagueJson);

    return leagueJson; //! temp
  } catch (err) {
    console.error("getLeague:", err.message);
    return null;
  }
}
