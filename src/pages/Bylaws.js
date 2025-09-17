import { Header } from "../components/_helper";
export default function Bylaws() {
  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header active_route="bylaws" />
      <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
        <div className="w-[95%] px-4 h-full">
          <div className="flex items-center justify-center w-full h-14 sm:h-20">
            <h1 className="w-1/3 text-3xl text-center cursor-default sm:text-2xl md:text-3xl text-stone-200">
              BYLAWS
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full text-stone-200">
            <span className="text-3xl font-black text-stone-300">
              BYLAWS PAGE
            </span>
            <span className="pt-2 text-sm italic text-stone-400">
              Coming Soon!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
