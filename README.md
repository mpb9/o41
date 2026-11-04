# ORDER :four::one: - Fantasy Football

- [order-41.com](https://order-41.com)
  - [Sleeper League](https://sleeper.com/leagues/1248116529610883072/team)
  - [Google Drive Folder](https://drive.google.com/drive/folders/1b8rxyCXi_al_9z5Wp39z8va5iE7OlB8h?usp=drive_link)
- [Git Repository](https://github.com/mpb9/o41)
  - [Project Notes (Obsidian)](https://github.com/mpb9/notes/blob/main/_DEV/PROJECTS/order-41.md)

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
