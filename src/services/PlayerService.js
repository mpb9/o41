import PLAYER_DATA_JSON from "../data/PlayerData_2025.json";
export const fetchTeamData = async (playerIds, pts, starters, ir, taxi) => {
  try {
    const teamData = await Promise.all(
      playerIds.map(async (playerId) => {
        const player = await fetchPlayer(
          playerId,
          pts[playerId],
          starters,
          ir,
          taxi
        );
        return player;
      })
    );
    return teamData;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayer = async (playerId, playerPts, starters, ir, taxi) => {
  try {
    const sleeperData = await fetchSleeperData(playerId);
    const lineupStatus = fetchLineupStatus(playerId, starters, ir, taxi);
    const playerData = [playerId, playerPts, lineupStatus, sleeperData];
    return playerData;
  } catch (err) {
    console.error(err);
  }
};

const fetchSleeperData = async (playerId) => {
  try {
    const pj = PLAYER_DATA_JSON[playerId] || null;
    if (pj === null) {
      console.log("WARNING!!! Undefined Player:", playerId);
      throw new Error("Undefined Player");
    }
    const playerDataJson = {
      full_name: pj.full_name || playerId,
      first_name: pj.first_name || playerId,
      last_name: pj.last_name || playerId,
      number: pj.number || -1,
      age: pj.age || -1,
      years_exp: pj.years_exp || -1,
      position: pj.position || "DEF",
      fantasy_positions: pj.fantasy_positions || ["DEF"],
      team: pj.team || playerId,
      status: pj.status || "Active",
    };
    return playerDataJson;
  } catch (err) {
    console.error(err);
  }
};

const fetchLineupStatus = (playerId, starters = [], ir = [], taxi = []) => {
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
};

export const fetchPlayersByLineupStatus = (players, lineupStatus) => {
  const pArr = players.filter((member) => member[2] === lineupStatus);
  const pArrSorted = sortByPosition(pArr);
  return pArrSorted;
};
const sortByPosition = (pArr) => {
  const idpPositions = ["LB", "CB", "S", "DE", "DT", "DB"];

  const qbs = pArr.filter((p) => p[3].position === "QB");
  const rbs = pArr.filter((p) => p[3].position === "RB");
  const wrs = pArr.filter((p) => p[3].position === "WR");
  const tes = pArr.filter((p) => p[3].position === "TE");
  const idps = pArr.filter((p) =>
    p[3].fantasy_positions.some((pos) => idpPositions.includes(pos))
  );
  const dst = pArr.filter((p) => p[3].position === "DEF");
  const k = pArr.filter((p) => p[3].position === "K");

  return [...qbs, ...rbs, ...wrs, ...tes, ...idps, ...dst, ...k];
};
