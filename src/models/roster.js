export default class Roster {
  division_id;
  league_id;
  locker_room_guy;
  nicknames;
  player_ids = [];
  pts = {
    fpts: 0.0,
    fpts_against: 0.0,
    ppts: 0.0,
  };
  record = {
    wins: 0,
    losses: 0,
    ties: 0,
    results: "",
    streak: "",
  };
  ir = [];
  roster_id;
  starters = [];
  taxi = [];
  user_id;
  waiver_budget_used = 0;

  constructor(json = {}) {
    this.division_id = Number(json.settings?.division) || null;
    this.league_id = String(json.league_id) || null;
    this.locker_room_guy = null; // ? null for now
    this.nicknames = null; // ? null for now
    this.player_ids = json.players || [];
    this.pts = {
      fpts:
        Number(json.settings?.fpts + 0.01 * json.settings?.fpts_decimal) || 0,
      fpts_against:
        Number(
          json.settings?.fpts_against +
            0.01 * json.settings?.fpts_against_decimal
        ) || 0,
      ppts:
        Number(json.settings?.ppts + 0.01 * json.settings?.ppts_decimal) || 0,
    };
    this.record = {
      wins: Number(json.settings?.wins) || 0,
      losses: Number(json.settings?.losses) || 0,
      ties: Number(json.settings?.ties) || 0,
      results: String(json.metadata?.record) || "",
      streak: String(json.metadata?.streak) || "",
    };
    this.ir = json.reserve || [];
    this.roster_id = Number(json.roster_id) || null;
    this.starters = json.starters || [];
    this.taxi = json.taxi || [];
    this.user_id = String(json.owner_id) || null;
    this.waiver_budget_used = Number(json.settings?.waiver_budget_used) || 0;
  }
}
