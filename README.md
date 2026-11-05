# ORDER :four::one: - Fantasy Football

- [order-41.com](https://order-41.com)
  - [Sleeper League](https://sleeper.com/leagues/1248116529610883072/team)
  - [Google Drive Folder](https://drive.google.com/drive/folders/1b8rxyCXi_al_9z5Wp39z8va5iE7OlB8h?usp=drive_link)
- [Git Repository](https://github.com/mpb9/o41)
- [Project Notes (Obsidian)](https://github.com/mpb9/notes/blob/main/_DEV/PROJECTS/order-41.md) **contains more information than README.md*

## Code :robot:

### [Run Locally](https://github.com/mpb9/notes/blob/main/_DEV/PROJECTS/order-41.md#run-locally)

```shell
cd o41 && npm run start
```

### [Deployment](https://github.com/mpb9/notes/blob/main/_DEV/PROJECTS/order-41.md#deployment)

```shell
cd o41 && npm run deploy
```

### [Models](https://github.com/mpb9/notes/blob/main/_DEV/PROJECTS/order-41.md#models)

![[docs/O41_Relational_DB_Diagram.png]]

#### league

| prop | type | desc |
| --- | --- | --- |
| avatar | str | unique avatar id |
| draft_id | str | [[#draft]]`.draft_id` associated with the [[#league]] |
| **league_id** | **str** | **unique [[#league]] id** |
| *metadata* | *obj* | *[[#league.metadata]]* |
| name | str | name of the [[#league]] |
| previous_league_id | str | previous [[#league]]`.league_id` |
| roster_positions | [ str ] | array of positions on each roster |
| *scoring_settings* | *obj* | *[[#league.scoring_settings]]* |
| season | str | calendar year of league |
| season_type | str | `"pre"` \| `"regular"` \| `"post"` (see: [[#nfl_state]]`.season_type`) |
| *settings* | *obj* | *[[#league.settings]]* |
| status | str | `"in_season"` \| `"complete"` |
| total_rosters | num | `6` - number of teams in league |

#### matchup

| prop | type | desc |
| --- | --- | --- |
| custom_pts | num | custom points applied to the given [[#roster]] in the [[#matchup]] |
| **matchup_id** | **num** | **unique [[#matchup]] id** |
| player_ids | [ str ] | list of [[#player]]`.player_id`s on the given [[#roster]] in the [[#matchup]] |
| player_pts | { str: num } | mapping of unique [[#player]]`.player_id`s |
| pts | num | total points scored by the given [[#roster]] in the [[#matchup]] |
| roster_id | num | [[#roster]]`.roster_id` |
| starters | [ str ] | list of starting [[#player]]`.player_id`s |
| starters_pts | [ num ] | list of points corresponding to each starting [[#player]] in the [[#matchup]] |

#### nfl_state

| prop | type | desc |
| --- | --- | --- |
| display_week | num | week displayed on Sleeper |
| league_create_season | str | current NFL league creation season year |
| league_season | str | current NFL league season year |
| leg | num | ??? current NFL leg number |
| previous_season | str | previous NFL season year |
| season | str | current NFL season year |
| season_has_scores | bool | indicates if the current NFL season has scores |
| season_start_date | str | start date of the current NFL season |
| season_type | str | `"pre"` \| `"regular"` \| `"post"` (see: [[#league]]`.season_type`) |
| week | num | current NFL week number |

#### player

| prop | type | desc |
| --- | --- | --- |
| age | num | |
| college | str | |
| espn_id | num | |
| fantasy_data_id | num | |
| fantasy_positions | [ str ] | list of fantasy positions |
| first_name | str | |
| full_name | str | |
| injury_status | str | |
| last_name | str | |
| lineup_status | str | `"starter"` \| `"ir"` \| `"taxi"` \| `"bench"` (via [[#matchup]] and [[#roster]]) |
| number | num | jersey number |
| **player_id** | **str** | **unique [[#player]] id** |
| position | str | primary fantasy position |
| pts | num | (from [[#matchup]] data) |
| rotowire_id | num | |
| status | str | `"Inactive"` \| `"Active"` \| `"Injured Reserve"` \| `"Practice Squad"` |
| team_name | str | abbreviated name of current NFL team (or `null`) |
| years_exp | num | years of experience in the NFL |

#### roster

| prop | type | desc |
| --- | --- | --- |
| division_id | num | (see: [[#league.metadata]]`.division_1`/`division_2`) |
| ir | [ str ] | list of injured reserve [[#player]]`.player_id`s |
| league_id | str | [[#league]]`.league_id` |
| locker_room_guy | ??? | ??? |
| nicknames | ??? | ??? |
| player_ids | [ str ] | list of [[#player]]`.player_id`s on the given [[#roster]] |
| *pts* | *obj* | *[[#roster.pts]]* |
| *record* | *obj* | *[[#roster.record]]* |
| **roster_id** | **num** | **unique [[#roster]] id** |
| starters | [ str ] | list of starting [[#player]]`.player_id`s |
| taxi | [ str ] | list of taxi [[#player]]`.player_id`s |
| user_id | str | [[#user]]`.user_id` |
| waiver_budget_used | num | |

#### user

| prop         | type    | desc                    |
| ------------ | ------- | ----------------------- |
| avatar       | str     |                         |
| display_name | str     |                         |
| team_name    | str     |                         |
| **user_id**  | **str** | **unique [[#user]] id** |
| username     | str     |                         |

### APIs

#### Sleeper

- [Documentation](https://docs.sleeper.com/)

##### Scripts

> **[Fetch All Players](https://docs.sleeper.com/#fetch-all-players)**
>
> ```shell
> cd o41/src/data && curl https://api.sleeper.app/v1/players/nfl -o all_players-<YYYYMMDD>.json
> ```
>
> *:exclamation: Only run once per day :exclamation:*
