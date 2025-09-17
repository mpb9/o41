import { Player } from "../models/_helper";
import PLAYER_DATA_JSON from "../utils/PlayerData_2025.json";
import { PTS_COLORS } from "../utils/styles";

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

export function getPlayersByRosterAndMatchup(roster, matchup) {
  const players = roster.player_ids.map((playerId) => {
    return getPlayer(
      playerId,
      matchup.players_pts[playerId] || 0,
      matchup.starters,
      roster.ir,
      roster.taxi
    );
  });
  return players;
}

export function getPlayersByLineupStatus(players, lineupStatus) {
  const pArr = players.filter(
    (player) => player.lineup_status === lineupStatus
  );
  const pArrSorted = sortByPosition(pArr);
  return pArrSorted;
}

export function getPlayerPtsColor(pts = 0, pos = "NA") {
  if (pos === "NA") return PTS_COLORS.NA;
  if (pos === "QB") {
    if (pts < 8) {
      return PTS_COLORS.really_low;
    } else if (pts < 12) {
      return PTS_COLORS.low;
    } else if (pts < 16) {
      return PTS_COLORS.medium_low;
    } else if (pts < 22) {
      return PTS_COLORS.medium_high;
    } else {
      return PTS_COLORS.high;
    }
  }
  if (pos === "TE") {
    if (pts < 4) {
      return PTS_COLORS.really_low;
    } else if (pts < 6) {
      return PTS_COLORS.low;
    } else if (pts < 9) {
      return PTS_COLORS.medium_low;
    } else if (pts < 13) {
      return PTS_COLORS.medium_high;
    } else {
      return PTS_COLORS.high;
    }
  }
  if (pos === "K") {
    if (pts < 3) {
      return PTS_COLORS.really_low;
    } else if (pts < 6) {
      return PTS_COLORS.low;
    } else if (pts < 8) {
      return PTS_COLORS.medium_low;
    } else if (pts < 15) {
      return PTS_COLORS.medium_high;
    } else {
      return PTS_COLORS.high;
    }
  }
  if (pos === "DEF" || pos === "DST") {
    if (pts < 2) {
      return PTS_COLORS.really_low;
    } else if (pts < 5) {
      return PTS_COLORS.low;
    } else if (pts < 7) {
      return PTS_COLORS.medium_low;
    } else if (pts < 10) {
      return PTS_COLORS.medium_high;
    } else {
      return PTS_COLORS.high;
    }
  }

  if (pts < 4) {
    return PTS_COLORS.really_low;
  } else if (pts < 8) {
    return PTS_COLORS.low;
  } else if (pts < 12) {
    return PTS_COLORS.medium_low;
  } else if (pts < 20) {
    return PTS_COLORS.medium_high;
  }
  return PTS_COLORS.high;
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

function sortByPosition(pArr) {
  const idpPositions = ["LB", "CB", "S", "DE", "DT", "DB"];

  const qbs = pArr.filter((p) => p.position === "QB");
  const rbs = pArr.filter((p) => p.position === "RB");
  const wrs = pArr.filter((p) => p.position === "WR");
  const tes = pArr.filter((p) => p.position === "TE");
  const idps = pArr.filter((p) => idpPositions.includes(p.position));
  const dst = pArr.filter((p) => p.position === "DEF" || p.position === "DST");
  const k = pArr.filter((p) => p.position === "K");

  return [...qbs, ...rbs, ...wrs, ...tes, ...idps, ...dst, ...k];
}
