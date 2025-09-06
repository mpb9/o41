# Order :four::one: - Fantasy Football

- [order-41.com](https://order-41.com)
- [Sleeper League](https://sleeper.com/leagues/1248116529610883072/team)
- [Git Repository](https://github.com/mpb9/o41)
- [Google Drive Folder](https://drive.google.com/drive/folders/1b8rxyCXi_al_9z5Wp39z8va5iE7OlB8h?usp=drive_link)

## Code :robot:

### Run Locally

```shell
cd o41 && npm run start
```

### Deploy

```shell
cd o41 && npm run deploy
```

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
