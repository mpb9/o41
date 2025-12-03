export default class Player {
  position = "NA"; // "QB", "RB", "WR", "TE", "K", "DST", etc.
  team_name = "FA"; // Team abbreviation, e.g., "NE", "DAL", etc.

  constructor(json = {}) {
    this.age = Number(json.age) || null;
    this.fantasy_positions = [...json.fantasy_positions];
    this.first_name = String(json.first_name) || null;
    this.full_name = String(json.full_name) || null;
    this.last_name = String(json.last_name) || null;
    this.lineup_status = json.lineup_status
      ? String(json.lineup_status)
      : "bench";
    this.number = Number(json.number) || null;
    this.player_id = String(json.player_id) || null;
    this.position = String(this.setPosition(json.position));
    this.pts = json.pts ? Number(json.pts) : 0;
    this.status = json.status ? String(json.status) : "Active";
    this.team_name = String(this.setTeamName(json.team));
    this.years_exp = Number(json.years_exp) || null;
  }

  setPosition(position = "NA") {
    if (!position || typeof position !== "string") {
      this.position = "NA";
      return this.position;
    }
    if (position === "DEF") {
      this.position = "DST";
    } else {
      this.position = position;
    }
    return this.position;
  }
  setTeamName(teamName = "FA") {
    if (!teamName || typeof teamName !== "string") {
      this.team_name = "FA";
    } else {
      this.team_name = teamName;
    }
    return this.team_name;
  }
}
