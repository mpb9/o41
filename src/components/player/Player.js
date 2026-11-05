import PropTypes from "prop-types";
import { useState } from "react";
import { Player as PlayerModel } from "../../models/_helper";

Player.propTypes = {
  player: PropTypes.instanceOf(PlayerModel).isRequired,
  btn_type: PropTypes.string.isRequired, // text | img
};

export default function Player({ player, btn_type }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {btn_type === "text" ? (
        <button onClick={() => setIsOpen(true)}>
          {player.first_name[0]} {player.last_name}
        </button>
      ) : btn_type === "img" ? (
        <button onClick={() => setIsOpen(true)}>PLAYER_IMG</button>
      ) : (
        <></>
      )}

      {isOpen ? (
        <div
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="z-50 relative"
        >
          <div
            className="fixed inset-0 flex justify-center items-center bg-rad-dim m-header-mobile sm:m-header p-4 sm:p-12 w-screen h-full-header-mobile sm:h-full-header cursor-default"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="space-y-2 bg-rad-primary shadow-dark shadow-xl px-2 sm:px-3 lg:px-5 py-2 sm:py-3 lg:py-4 border-2 border-primary rounded max-w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl text-primary-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-1 items-center bg-dark px-2 lg:px-4 py-0.5 sm:py-1 border-2 border-primary rounded overflow-hidden text-light text-left whitespace-nowrap">
                <span className="flex-none font-mono text-primary text-base sm:text-lg lg:text-xl">
                  {player.full_name}
                </span>
                <span className="pl-6 sm:pl-8 lg:pl-12 overflow-hidden font-bold text-primary-accent text-xs sm:text-sm lg:text-base">
                  {player.number} | {player.position} | {player.team_name}
                </span>
              </div>

              <div className="flex items-baseline space-x-4 px-2 lg:px-3 pt-1 lg:pt-2 overflow-hidden text-sm lg:text-base">
                <span>AGE: {player.age}</span>
                <span>EXP: {player.years_exp}</span>
              </div>
              <div className="flex items-baseline space-x-4 px-2 lg:px-3 overflow-hidden text-sm lg:text-base">
                <span>COLLEGE: {player.college}</span>
              </div>
              <div className="flex items-baseline space-x-4 px-2 lg:px-3 overflow-hidden text-sm lg:text-base">
                <span>INJURY STATUS: {player.injury_status}</span>
              </div>
              <div className="flex items-baseline space-x-4 px-2 lg:px-3 overflow-hidden text-sm lg:text-base">
                <span>LINEUP STATUS: {player.lineup_status}</span>
              </div>

              <div className="flex justify-start space-x-2 px-2 lg:px-3 pt-0 lg:pt-1.5 overflow-hidden font-bold text-primary-accent text-xs lg:text-sm italic">
                <a
                  href={`https://www.espn.com/nfl/player/_/id/${player.espn_id}`}
                  className="underline"
                >
                  ESPN
                </a>
                <a
                  className="underline"
                  href={`https://fantasydata.com/nfl/${player.first_name}-${player.last_name}-fantasy/${player.fantasy_data_id}`}
                >
                  FANTASY_DATA
                </a>
                <a
                  className="underline"
                  href={`https://www.rotowire.com/football/player/${player.first_name}-${player.last_name}-${player.rotowire_id}`}
                >
                  ROTOWIRE
                </a>
              </div>

              <div className="flex justify-end gap-4 pb-0 lg:pb-1 text-dark text-sm sm:text-base">
                <button
                  className="bg-primary sm:hover:bg-dark px-2 rounded-full sm:hover:text-primary-accent"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
