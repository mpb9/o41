export default class NflState {
  constructor(json = {}) {
    this.display_week = Number(json.display_week) || 0;
    this.league_create_season = String(json.league_create_season) || null;
    this.league_season = String(json.league_season) || null;
    this.leg = Number(json.leg) || 0;
    this.previous_season = String(json.previous_season) || null;
    this.season = String(json.season) || null;
    this.season_has_scores = Boolean(json.season_has_scores) || false;
    this.season_start_date = String(json.season_start_date) || null;
    this.season_type = String(this.setSeasonType(json.season_type));
    this.week = Number(json.week) || 0;
  }

  setSeasonType(season_type = "pre") {
    if (!season_type || typeof season_type !== "string") {
      this.season_type = "pre";
    } else if (
      season_type !== "pre" &&
      season_type !== "regular" &&
      season_type !== "post"
    ) {
      this.season_type = "pre";
      return this.season_type;
    } else {
      this.season_type = season_type;
    }
    return this.season_type;
  }
}
