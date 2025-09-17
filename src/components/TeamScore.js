import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Matchup, Roster, User } from "../models/_helper";
import {
  getPlayersByLineupStatus,
  getPlayersByRosterAndMatchup,
} from "../services/_helper";
import { PlayerScore } from "./_helper";

TeamScore.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  roster: PropTypes.instanceOf(Roster).isRequired,
  matchup: PropTypes.instanceOf(Matchup).isRequired,
};
export default function TeamScore(props) {
  const [showBench, setShowBench] = useState(true);
  const [team, setTeam] = useState(null);
  const [starters, setStarters] = useState([]);
  const [bench, setBench] = useState([]);
  const [taxi, setTaxi] = useState([]);
  const [ir, setIr] = useState([]);

  useEffect(() => {
    function getPlayers() {
      const players = getPlayersByRosterAndMatchup(props.roster, props.matchup);
      setTeam(players);
      setStarters(getPlayersByLineupStatus(players, "starter"));
      setBench(getPlayersByLineupStatus(players, "bench"));
      setTaxi(getPlayersByLineupStatus(players, "taxi"));
      setIr(getPlayersByLineupStatus(players, "ir"));
    }
    getPlayers();
  }, [props]);

  return (
    <div className="w-full h-full overflow-scroll text-center text-black cursor-default">
      {/* NAME */}
      <div className="flex flex-col items-center justify-center w-full px-2 py-3 h-[4.5rem] overflow-hidden border-1 border-b-1 rounded-t-lg border-stone-600 min-h-[4.5rem] bg-stone-900 lg:h-fill lg:min-h-0 lg:py-6">
        <span className="text-base font-black leading-5 lg:text-lg text-stone-300">
          {props.user.team_name}
        </span>
        <span className="pt-1 text-sm italic text-stone-400 lg:pt-0">
          {props.roster.record.wins}-{props.roster.record.losses}
        </span>
      </div>

      {/* PTS */}
      <div className="w-full py-1 bg-stone-950 border-x-1 border-stone-600">
        <span className="text-lg font-bold text-primary">
          {props.matchup.pts} pts
        </span>
      </div>

      {team != null && starters.length > 0 ? (
        <div className="w-full rounded-b-lg">
          {/* STARTERS */}
          {starters.map((player) => (
            <PlayerScore key={player.player_id} player={player} />
          ))}

          <div
            className="flex items-center justify-center w-full transition-colors duration-300 border-2 border-b-0 cursor-pointer h-9 bg-stone-900 border-stone-600 hover:bg-stone-800 text-stone-200 hover:text-stone-500"
            onClick={() => setShowBench(!showBench)}
          >
            <span className="tracking-[0.15rem]">BENCH</span>
          </div>

          {/* BENCH */}
          {showBench ? (
            <div className="bg-stone-400 sm:text-[0.85rem] lg:text-base text-base w-full border-b-2 border-stone-600">
              {bench.map((player) => (
                <PlayerScore key={player.player_id} player={player} />
              ))}
              <div className="flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200">
                <span className="tracking-[0.15rem]">IR</span>
              </div>
              {ir.map((player) => (
                <PlayerScore key={player.player_id} player={player} />
              ))}
              <div className="flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200">
                <span className="tracking-[0.15rem]">Taxi</span>
              </div>
              {taxi.map((player) => (
                <PlayerScore key={player.player_id} player={player} />
              ))}
            </div>
          ) : (
            <div className="w-full overflow-hidden border-t-2 border-stone-600"></div>
          )}
        </div>
      ) : (
        // Loading
        <div className="flex items-center justify-center w-full h-full bg-stone-700">
          <span className="text-lg font-bold text-stone-200">Loading...</span>
        </div>
      )}
    </div>
  );
}
