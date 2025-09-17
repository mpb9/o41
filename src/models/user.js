export default class User {
  constructor(json = {}) {
    this.avatar = json.avatar || null;
    this.display_name = json.display_name || null;
    this.team_name = json.metadata?.team_name || null;
    this.user_id = json.user_id || null;
  }
}
