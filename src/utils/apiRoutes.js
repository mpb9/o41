import { LEAGUE_ID } from "./leagueInfo";

const API_URL__SLEEPER = "https://api.sleeper.app/v1/";
const API_URL__SLEEPER_AVATARS = "https://sleepercdn.com/avatars/";

export const API__SLEEPER = {
  AVATARS: {
    full: (avatar_id = "") => `${API_URL__SLEEPER_AVATARS}${avatar_id}`,
    thumbnail: (avatar_id = "") =>
      `${API_URL__SLEEPER_AVATARS}thumbs/${avatar_id}`,
  },
  BRACKETS: {
    losers: `${API_URL__SLEEPER}league/${LEAGUE_ID}/losers_bracket`,
    winners: `${API_URL__SLEEPER}league/${LEAGUE_ID}/winners_bracket`,
  },
  DRAFT: {
    info: (draft_id = "") => `${API_URL__SLEEPER}draft/${draft_id}`,
    picks: (draft_id = "") => `${API_URL__SLEEPER}draft/${draft_id}/picks`,
    trades: (draft_id = "") =>
      `${API_URL__SLEEPER}draft/${draft_id}/traded_picks`,
  },
  drafts: `${API_URL__SLEEPER}league/${LEAGUE_ID}/drafts`,
  league: `${API_URL__SLEEPER}league/${LEAGUE_ID}`,
  matchups: (week = "") =>
    `${API_URL__SLEEPER}league/${LEAGUE_ID}/matchups/${week}`,
  nfl_state: `${API_URL__SLEEPER}state/nfl`,
  players: `${API_URL__SLEEPER}players/nfl`,
  rosters: `${API_URL__SLEEPER}league/${LEAGUE_ID}/rosters`,
  traded_picks: `${API_URL__SLEEPER}league/${LEAGUE_ID}/traded_picks`,
  transactions: (week = "") =>
    `${API_URL__SLEEPER}league/${LEAGUE_ID}/transactions/${week}`,
  TRENDING: {
    add: (lookback_hours = "24", limit = "25") =>
      `${API_URL__SLEEPER}players/nfl/trending/add?lookback_hours=${lookback_hours}&limit=${limit}`,
    drop: (lookback_hours = "24", limit = "25") =>
      `${API_URL__SLEEPER}players/nfl/trending/drop?lookback_hours=${lookback_hours}&limit=${limit}`,
  },
  user: (user_id_or_name = "") => `${API_URL__SLEEPER}user/${user_id_or_name}`,
  users: `${API_URL__SLEEPER}league/${LEAGUE_ID}/users`,
};
