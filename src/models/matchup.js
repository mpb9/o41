export default class Matchup {
  custom_points = 0.0;
  matchup_id;
  player_ids = [];
  players_pts = {};
  pts = 0.0;
  roster_id;
  starters = [];
  starters_pts = [];
  constructor(json) {
    this.custom_pts = Number(json.custom_points) || 0.0;
    this.matchup_id = Number(json.matchup_id) || null;
    this.player_ids = json.players || [];
    this.players_pts = json.players_points || {};
    this.pts = Number(json.points) || 0.0;
    this.roster_id = Number(json.roster_id) || null;
    this.starters = json.starters || [];
    this.starters_pts = json.starters_points || [];
  }
}
