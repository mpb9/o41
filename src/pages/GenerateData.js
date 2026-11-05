import { Header } from "../components/_helper";
import { API__SLEEPER_PLAYER_KEYS } from "../constants/apiConstants";
import RAW_PLAYER_DATA_JSON from "../data/PlayerData_Raw.json";

export default function GenerateData() {
  function filterPlayersData() {
    const filteredPlayers = {};

    Object.keys(RAW_PLAYER_DATA_JSON).forEach((playerId) => {
      const player = RAW_PLAYER_DATA_JSON[playerId];
      filteredPlayers[playerId] = {};

      API__SLEEPER_PLAYER_KEYS.forEach((key) => {
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
      <Header activeRoute="generate" />
      <div className="px-40 py-[30vh] w-full">
        <div
          className="bg-[#AED998] hover:bg-stone-400 p-4 border-8 border-dark rounded-2xl font-bold text-black text-3xl text-center hover:scale-105 cursor-pointer"
          onClick={() => filterPlayersData()}
        >
          filter raw data
        </div>
      </div>
    </div>
  );
}
