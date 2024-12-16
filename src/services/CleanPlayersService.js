import players from '../data/api/all_players-1734110609482.json';

const keysToKeep = [
  'player_id',
  'full_name',
  'first_name',
  'last_name',
  'team',
  'position',
  'fantasy_positions',
  'number',
  'age',
  'years_exp',
  'status',
];

const saveFileLocally = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const datetime = new Date().toISOString().slice(0, 10).replace(/:/g, '-');
  link.href = url;
  link.download = `PlayerData_${datetime}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

// ! work to download a simpliefied version of the player data, but need to utilize it when loading at runtime

const filterPlayersData = () => {
  const filteredPlayers = {};

  Object.keys(players).forEach((playerId) => {
    const player = players[playerId];
    filteredPlayers[playerId] = {};

    keysToKeep.forEach((key) => {
      if (player[key] !== undefined) {
        filteredPlayers[playerId][key] = player[key];
      }
    });
  });

  saveFileLocally(filteredPlayers);
  console.log('Filtered data saved to filtered_players.json');
  return filteredPlayers;
};

export default filterPlayersData;
