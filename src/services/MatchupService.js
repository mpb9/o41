import { fetchMatchups, fetchNflState } from "../api/_helper";
import { Matchup } from "../models/_helper";
import { PLAYOFF_SCHEDULE } from "../utils/playoffInfo";
import { getRosterByUserId } from "./_helper";

export async function getAllMatchups(nfl_state = null) {
  try {
    const nflState = nfl_state === null ? await fetchNflState() : nfl_state;
    if (!nflState) throw new Error("NFL state data is unavailable.");

    if (nflState.season_type !== "regular") {
      const playoffMatchups = await getAllPlayoffMatchups(nflState);
      if (!playoffMatchups)
        throw new Error("Playoff matchup data is unavailable.");
      return playoffMatchups.map((matchupJson) => new Matchup(matchupJson));
    }

    const matchupsJson = await fetchMatchups(nflState.display_week);
    if (!matchupsJson) throw new Error("No matchup data available.");
    return matchupsJson.map((matchupJson) => new Matchup(matchupJson));
  } catch (error) {
    console.error("getAllMatchups:", error.message);
    return [];
  }
}

// ! work in progress
export async function getAllPlayoffMatchups(nfl_state = null) {
  try {
    const nflState = nfl_state === null ? await fetchNflState() : nfl_state;
    if (!nflState) throw new Error("NFL state data is unavailable.");

    let playoffRound = null;
    PLAYOFF_SCHEDULE.forEach((round) => {
      if (
        round.season === nfl_state.season &&
        round.week === nfl_state.display_week
      ) {
        playoffRound = round;
      }
    });
    if (playoffRound === null) {
      throw new Error("Playoff round data is unavailable.");
    }

    let sleeperMatchups = await fetchMatchups(nflState.display_week);
    if (!sleeperMatchups)
      throw new Error("Sleeper matchup data is unavailable.");

    sleeperMatchups.forEach((sleeperMatchup) => {
      if (playoffRound.byes.includes(sleeperMatchup.roster_id)) {
        sleeperMatchup.matchup_id = 0;
      } else {
        playoffRound.matchups.forEach((playoffRoundMatchup) => {
          if (playoffRoundMatchup.roster_id === sleeperMatchup.roster_id) {
            sleeperMatchup.matchup_id = playoffRoundMatchup.matchup_id;
          }
        });
      }
    });

    return sleeperMatchups;
  } catch (error) {
    console.error("getAllPlayoffMatchups:", error.message);
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
