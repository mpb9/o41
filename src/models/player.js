export default class Player {
  constructor(json = {}) {
    this.age = Number(json.age) || null;
    this.fantasy_positions = json.fantasy_positions || [];
    this.first_name = String(json.first_name) || null;
    this.full_name = String(json.full_name) || null;
    this.last_name = String(json.last_name) || null;
    this.lineup_status = String(json.lineup_status) || "bench";
    this.number = Number(json.number) || null;
    this.player_id = String(json.player_id) || null;
    this.position = String(json.position) || null;
    this.pts = Number(json.pts) || 0;
    this.status = String(json.status) || "Active";
    this.team = String(json.team) || "FA";
    this.years_exp = Number(json.years_exp) || null;
  }
}
