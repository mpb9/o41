import { Header } from "../components/_helper";

export default function League({ leagues, rosters, users }) {
  console.log(leagues[0]);
  console.log(rosters[0]);
  console.log(users[0]);
  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header active_route="league" />
      <div className="flex flex-row w-full h-full-header">
        <div className="hidden w-1/6 h-full border-0 border-r-1 bg-stone-950 border-stone-600 md:flex md:flex-col md:items-center md:justify-between">
          <div className="pt-4">
            <span className="text-3xl font-black text-stone-300">O41</span>
            <span className="block text-sm italic text-stone-400">v2.0.0</span>
          </div>
          <img
            src="/img/logo.png"
            alt="ORDER 41"
            className="mx-auto rounded-lg"
            width={"100%"}
            height={50}
          />
          {/* STANDINGS */}
          {/* TOP SCORERS */}
        </div>
        <div className="w-full text-2xl text-center cursor-default sm:text-2xl md:text-3xl md:w-5/6 text-primary">
          <h1 className="flex items-center justify-center mt-6 text-5xl font-black">
            ORDER 41
          </h1>
          {/* LEAGUE DETAILS */}
        </div>
      </div>
    </div>
  );
}
