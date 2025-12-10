import { OWNERS } from "./ownerInfo";

// ! need to finish this
export const PLAYOFF_SCHEDULE = [
  {
    season: 2025,
    week: 15,
    matchup_titles: ["RD:1 PLAY-IN", "RD:1 BYE", "TOILET BOWL BYE"],
    matchups: [
      { roster_id: 4, matchup_id: 1, owner: OWNERS.edel },
      { roster_id: 6, matchup_id: 1, owner: OWNERS.manion },
      { roster_id: 3, matchup_id: 1, owner: OWNERS.pechulonis },
      { roster_id: 1, matchup_id: 2, owner: OWNERS.beebe },
      { roster_id: 2, matchup_id: 2, owner: OWNERS.whalen },
      { roster_id: 5, matchup_id: 3, owner: OWNERS.ruff },
    ],
    byes: [], // [1, 2, 5],
  },
  {
    season: 2025,
    week: 16,
    matchup_titles: ["ROUND 2", "ROUND 2", "TOILET BOWL"],
    matchups: [
      { roster_id: 2, matchup_id: 1, owner: OWNERS.whalen },
      { roster_id: 1, matchup_id: 2, owner: OWNERS.beebe },
      { roster_id: 3, matchup_id: 3, owner: OWNERS.ruff },
    ],
    byes: [],
  },
  {
    season: 2025,
    week: 17,
    matchup_titles: ["CHAMPIONSHIP", "THIRD PLACE", "TOILET BOWL"],
    matchups: [],
    byes: [],
  },
  { season: 2025, matchup_titles: [], week: 18, matchups: [], byes: [] },
  { season: 2025, matchup_titles: [], week: 19, matchups: [], byes: [] },
];

export const TOILET_BOWLS = [
  {
    season: 2023,
    owner: OWNERS.manion,
    punishment: "24/16/12 Challenge",
  },
  {
    season: 2024,
    owner: OWNERS.manion,
    punishment: "24 Beers at a Bar",
  },
];
