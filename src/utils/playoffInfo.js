import { USER_ID } from "./leagueInfo";

// ! need to finish this
export const PLAYOFF_SCHEDULE = [
  {
    season: 2025,
    week: 15,
    matchups: [
      { roster_id: 4, matchup_id: 1, owner_id: USER_ID.edel },
      { roster_id: 6, matchup_id: 1, owner_id: USER_ID.manion },
      { roster_id: 3, matchup_id: 1, owner_id: USER_ID.pechulonis },
    ],
    byes: [1, 2, 5],
  },
  {
    season: 2025,
    week: 16,
    matchups: [
      { roster_id: 2, matchup_id: 1, owner_id: USER_ID.whalen },
      { roster_id: 1, matchup_id: 2, owner_id: USER_ID.beebe },
      { roster_id: 3, matchup_id: 3, owner_id: USER_ID.ruff },
    ],
    byes: [],
  },
  { season: 2025, week: 17, matchups: [], byes: [] },
  { season: 2025, week: 18, matchups: [], byes: [] },
  { season: 2025, week: 19, matchups: [], byes: [] },
];

export const LEAGUE_SCHEDULE = [{ season: 2025 }];
