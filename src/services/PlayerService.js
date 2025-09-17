import { Player } from "../models/_helper";
import PLAYER_DATA_JSON from "../utils/PlayerData_2025.json";

export function getPlayersByRosterAndMatchup(roster, matchup) {
  const players = roster.player_ids.map((playerId) => {
    return getPlayer(
      playerId,
      matchup.players_pts[playerId] || 0,
      roster.starters,
      roster.ir,
      roster.taxi
    );
  });
  return players;
}

export function getPlayer(playerId, playerPts, starters, ir, taxi) {
  const sleeperPlayerJson = PLAYER_DATA_JSON[playerId] || null;
  if (sleeperPlayerJson === null) {
    console.log("WARNING!!! Undefined Player:", playerId);
    return null;
  }
  const lineupStatus = getLineupStatus(playerId, starters, ir, taxi);
  const playerJson = {
    player_id: playerId,
    pts: playerPts,
    lineup_status: lineupStatus,
    ...sleeperPlayerJson,
  };
  return new Player(playerJson);
}

function getLineupStatus(playerId, starters = [], ir = [], taxi = []) {
  if (starters === null) starters = [];
  if (ir === null) ir = [];
  if (taxi === null) taxi = [];

  if (starters.includes(playerId)) {
    return "starter";
  } else if (ir.includes(playerId)) {
    return "ir";
  } else if (taxi.includes(playerId)) {
    return "taxi";
  }
  return "bench";
}

export function getPlayersByLineupStatus(players, lineupStatus) {
  const pArr = players.filter(
    (player) => player.lineup_status === lineupStatus
  );
  const pArrSorted = sortByPosition(pArr);
  return pArrSorted;
}

function sortByPosition(pArr) {
  const idpPositions = ["LB", "CB", "S", "DE", "DT", "DB"];

  const qbs = pArr.filter((p) => p.position === "QB");
  const rbs = pArr.filter((p) => p.position === "RB");
  const wrs = pArr.filter((p) => p.position === "WR");
  const tes = pArr.filter((p) => p.position === "TE");
  const idps = pArr.filter((p) => idpPositions.includes(p.position));
  const dst = pArr.filter((p) => p.position === "DEF");
  const k = pArr.filter((p) => p.position === "K");

  return [...qbs, ...rbs, ...wrs, ...tes, ...idps, ...dst, ...k];
}
