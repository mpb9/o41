import { Header } from "../components/_helper";
import PLAYER_DATA_JSON from "../utils/PlayerData_2025.json";

const keysToKeep = [
  "player_id",
  "full_name",
  "first_name",
  "last_name",
  "team",
  "position",
  "fantasy_positions",
  "number",
  "age",
  "years_exp",
  "status",
];

export default function GenerateData() {
  function filterPlayersData() {
    const filteredPlayers = {};

    Object.keys(PLAYER_DATA_JSON).forEach((playerId) => {
      const player = PLAYER_DATA_JSON[playerId];
      filteredPlayers[playerId] = {};

      keysToKeep.forEach((key) => {
        if (player[key] !== undefined) {
          filteredPlayers[playerId][key] = player[key];
        }
      });
    });

    saveFileLocally(filteredPlayers);

    const today = new Date().toISOString().slice(0, 10);
    console.log(`Filtered data saved to PlayerData_${today}.json`);

    return filteredPlayers;
  }

  function saveFileLocally(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const today = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `PlayerData_${today}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <Header activeRoute="GenerateData" />
      <div className="w-full px-40 py-[30vh]">
        <div
          className="p-4 text-3xl font-bold text-center border-8 cursor-pointer border-slate-950 rounded-2xl hover:scale-105 hover:bg-slate-400 bg-[#AED998]"
          onClick={() => filterPlayersData()}
        >
          generate data
        </div>
      </div>
    </div>
  );
}
