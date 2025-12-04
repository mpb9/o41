import { LeagueMetadata, LeagueSettings, ScoringSettings } from "../_helper";

export default class League {
  constructor(json = {}) {
    this.avatar = json.avatar ? String(json.avatar) : null;
    this.draft_id = json.draft_id ? String(json.draft_id) : null;
    this.league_id = json.league_id ? String(json.league_id) : null;
    this.metadata = new LeagueMetadata(json.metadata);
    this.name = json.name ? String(json.name) : null;
    this.previous_league_id = json.previous_league_id
      ? String(json.previous_league_id)
      : null;
    this.roster_positions = json.roster_positions ? json.roster_positions : [];
    this.scoring_settings = new ScoringSettings(json.scoring_settings);
    this.season = json.season ? Number(json.season) : null;
    this.season_type = json.season_type ? String(json.season_type) : "regular";
    this.settings = new LeagueSettings(json.settings);
    this.status = json.status ? String(json.status) : "complete";
    this.total_rosters = json.total_rosters ? Number(json.total_rosters) : 6;
  }
}
