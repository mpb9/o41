import Header from "../components/Header";
import filterPlayersData from "../services/CleanPlayersService";

export default function GenerateData() {
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
