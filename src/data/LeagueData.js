const api_url = "https://api.sleeper.app/v1/";
const id = "1248116529610883072";

export const LEAGUE = {
  id: id,
  sleeper: `https://sleeper.com/leagues/${id}`,
  drive:
    "https://drive.google.com/drive/folders/1b8rxyCXi_al_9z5Wp39z8va5iE7OlB8h?usp=drive_link",
  api_routes: {
    league: `${api_url}league/${id}`,
    rosters: `${api_url}league/${id}/rosters`,
    users: `${api_url}league/${id}/users`,
    matchups: `${api_url}league/${id}/matchups/`,
    players: `${api_url}players/nfl`,
    nfl_state: `${api_url}state/nfl`,
  },
};
