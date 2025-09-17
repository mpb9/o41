export default class Matchup {
  constructor(json) {
    this.custom_points = json.custom_points || 0.0;
    this.matchup_id = json.matchup_id || null;
    this.players = json.players || [];
    this.players_points = json.players_points || {};
    this.points = json.points || 0.0;
    this.roster_id = json.roster_id || null;
    this.starters = json.starters || [];
    this.starters_points = json.starters_points || [];
  }
}
