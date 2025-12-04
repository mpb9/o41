export default class LeagueMetadata {
  constructor(json = {}) {
    this.division_1 = json.division_1 ? String(json.division_1) : null;
    this.division_1_avatar = json.division_1_avatar
      ? String(json.division_1_avatar)
      : null;
    this.division_2 = json.division_2 ? String(json.division_2) : null;
    this.division_2_avatar = json.division_2_avatar
      ? String(json.division_2_avatar)
      : null;
    this.keeper_deadline = json.keeper_deadline
      ? Number(json.keeper_deadline)
      : null;
    this.latest_league_winner_roster_id = json.latest_league_winner_roster_id
      ? Number(json.latest_league_winner_roster_id)
      : null;
  }
}
