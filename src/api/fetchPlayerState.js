import PLAYER_DATA_JSON from "../PlayerData_2025.json";

export default function fetchPlayerState(playerId = "") {
  if (playerId.length === 0) return null;

  const pj = PLAYER_DATA_JSON[playerId] || null;
  if (pj === null) {
    console.log("WARNING!!! Undefined Player:", playerId);
    return null;
  }
  const playerState = {
    player_id: pj.player_id || playerId,
    first_name: pj.first_name || "",
    last_name: pj.last_name || "",
    number: pj.number || null,
    age: pj.age || null,
    years_exp: pj.years_exp || null,
    position: pj.position,
    fantasy_positions: pj.fantasy_positions,
    team: pj.team || "FA",
    status: pj.status || "Active",
  };

  return playerState; // ! temp

  // if (playerState.age ==) return playerDataJson;
  // ...

  // ! WORK IN PROGRESS
}

// "12527": {
//   "player_id": "12527",
//   "full_name": "Ashton Jeanty",
//   "first_name": "Ashton",
//   "last_name": "Jeanty",
//   "team": "LV",
//   "position": "RB",
//   "fantasy_positions": [
//     "RB"
//   ],
//   "number": 2,
//   "age": 21,
//   "years_exp": 0,
//   "status": "Active"
// },

//   "LV": {
//   "player_id": "LV",
//   "first_name": "Las Vegas",
//   "last_name": "Raiders",
//   "team": "LV",
//   "position": "DEF",
//   "fantasy_positions": [
//     "DEF"
//   ]
// },
