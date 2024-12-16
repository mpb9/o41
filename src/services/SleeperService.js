import axios from 'axios';
import { LEAGUE } from '../data/LeagueData';
import { USERS } from '../data/UserData';

// MARK: LEAGUE
export const fetchLeagueData = async () => {
  try {
    const response = await axios.get(LEAGUE.api_routes.league);
    const league = await formatLeague(response.data);
    return league;
  } catch (err) {
    console.error(err);
  }
};
export const formatLeague = async (league) => {
  return {
    league_id: league.league_id,
    name: league.name,
    avatar: league.avatar,
    season: league.season,
    total_rosters: league.total_rosters,
    scoring_settings: league.scoring_settings,
    roster_positions: league.roster_positions,
    division_1: league.metadata.division_1,
    division_2: league.metadata.division_2,
    latest_league_winner_roster_id: league.metadata.latest_league_winner_roster_id,
  };
};

// MARK: ROSTERS
export const fetchRostersData = async () => {
  try {
    const response = await axios.get(LEAGUE.api_routes.rosters);
    const rosters = await genRosters(response.data);
    return rosters;
  } catch (err) {
    console.error(err);
  }
};
export const genRosters = async (rosters) => {
  const mike = formatRoster(rosters.find((roster) => roster.owner_id === USERS.mike.id));
  const shim = formatRoster(rosters.find((roster) => roster.owner_id === USERS.shim.id));
  const pech = formatRoster(rosters.find((roster) => roster.owner_id === USERS.pech.id));
  const edel = formatRoster(rosters.find((roster) => roster.owner_id === USERS.edel.id));
  const slop = formatRoster(rosters.find((roster) => roster.owner_id === USERS.slop.id));
  const conner = formatRoster(rosters.find((roster) => roster.owner_id === USERS.conner.id));
  return [mike, shim, pech, edel, slop, conner];
};
export const formatRoster = (roster) => {
  return {
    user_id: roster.owner_id,
    roster_id: roster.roster_id,
    players: roster.players,
    starters: roster.starters,
    reserve: roster.reserve,
    taxi: roster.taxi,
    settings: roster.settings,
  };
};

// MARK: USERS
export const fetchUsersData = async () => {
  try {
    const response = await axios.get(LEAGUE.api_routes.users);
    const users = await genUsers(response.data);
    return users;
  } catch (err) {
    console.error(err);
  }
};
export const genUsers = async (users) => {
  const mike = formatUser(users.find((user) => user.user_id === USERS.mike.id));
  const shim = formatUser(users.find((user) => user.user_id === USERS.shim.id));
  const pech = formatUser(users.find((user) => user.user_id === USERS.pech.id));
  const edel = formatUser(users.find((user) => user.user_id === USERS.edel.id));
  const slop = formatUser(users.find((user) => user.user_id === USERS.slop.id));
  const conner = formatUser(users.find((user) => user.user_id === USERS.conner.id));
  return [mike, shim, pech, edel, slop, conner];
};
export const formatUser = (user) => {
  return {
    user_id: user.user_id,
    display_name: user.display_name,
    team_name: user.metadata.team_name,
    avatar: user.metadata.avatar,
  };
};

// MARK: MATCHUPS
export const fetchMatchupsData = async () => {
  try {
    const nflState = await fetchNFLStateData();
    const url = `${LEAGUE.api_routes.matchups}${nflState.week}`;
    const response = await axios.get(url);
    const matchups = await genMatchups(response.data);
    return matchups;
  } catch (err) {
    console.error(err);
  }
};
export const genMatchups = async (matchups) => {
  const matchup1 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 1));
  const matchup2 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 2));
  const matchup3 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 3));
  const matchup4 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 4));
  const matchup5 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 5));
  const matchup6 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 6));
  return [matchup1, matchup2, matchup3, matchup4, matchup5, matchup6];
};
export const formatMatchup = (matchup) => {
  return {
    roster_id: matchup.roster_id,
    matchup_id: matchup.matchup_id,
    points: matchup.points,
    starters: matchup.starters,
    players: matchup.players,
    starters_points: matchup.starters_points,
    players_points: matchup.players_points,
  };
};

// MARK: NFL STATE
export const fetchNFLStateData = async () => {
  try {
    const response = await axios.get(LEAGUE.api_routes.nfl_state);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
