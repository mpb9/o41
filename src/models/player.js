export default class Player {
  constructor(json = {}) {
    this.age = json.age || null;
    this.fantasy_positions = json.fantasy_positions || [];
    this.first_name = json.first_name || null;
    this.full_name = json.full_name || null;
    this.last_name = json.last_name || null;
    this.lineup_status = json.lineup_status || "bench";
    this.number = json.number || null;
    this.player_id = json.player_id || null;
    this.position = json.position || null;
    this.pts = json.pts || 0;
    this.status = json.status || "Active";
    this.team = json.team || "FA";
    this.years_exp = json.years_exp || null;
  }
}
