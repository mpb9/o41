export default class User {
  avatar;
  display_name;
  team_name;
  user_id;

  constructor(json = {}) {
    this.avatar = String(json.avatar) || null;
    this.display_name = String(json.display_name) || null;
    this.team_name = String(json.metadata?.team_name) || null;
    this.user_id = String(json.user_id) || null;
  }
}
