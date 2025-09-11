import { ArrowUp } from "@phosphor-icons/react";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className="bg-rad-red group">
      <Header activeRoute="NotFound" />
      <div className="cursor-default h-full-header">
        <div className="flex flex-col text-6xl items-center w-full h-[40vh] transition-all text-red-700 animate-not-found">
          <ArrowUp weight="light" size="50%" />
          <div>GO BACK HOME!</div>
        </div>
        <div className="absolute w-full text-center rounded-lg text-stone-950 bottom-11">
          <h1 className="text-9xl">404</h1>
          <p className="pt-2 italic text-7xl">page not found</p>
        </div>
      </div>
    </div>
  );
}
