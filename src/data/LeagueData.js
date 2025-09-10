const api_url = "https://api.sleeper.app/v1/";
const id = "1248116529610883072";

export const LEAGUE = {
  id: id,
  url: `https://sleeper.com/leagues/${id}`,
  api_routes: {
    league: `${api_url}league/${id}`,
    rosters: `${api_url}league/${id}/rosters`,
    users: `${api_url}league/${id}/users`,
    matchups: `${api_url}league/${id}/matchups/`,
    players: `${api_url}players/nfl`,
    nfl_state: `${api_url}state/nfl`,
  },
};
