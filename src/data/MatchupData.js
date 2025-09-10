import { USERS } from "./UserData";

// ! shouldnt need this (unless our matchups aren't the same as Sleeper's)
// should be able to use the NFL State API to get the current week and then use that to get the league matchups
export const MATCHUPS = [
  { teams: [USERS.mike.id, USERS.shim.id], title: "DIRTY X PRESTIGE" },
  { teams: [USERS.slop.id, USERS.conner.id], title: "CONCUSSIONS X SLOP" },
  { teams: [USERS.pech.id, USERS.edel.id], title: "TEAM X TUANON" },
];
