import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Matchup, Roster, User } from "../models/_helper";
import { getPlayersByLineupStatus } from "../services/_helper";
import { fetchTeamData } from "../services/PlayerService"; // ! change this
import { PlayerScore } from "./_helper";

TeamScore.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  roster: PropTypes.instanceOf(Roster).isRequired,
  matchup: PropTypes.instanceOf(Matchup).isRequired,
};

export default function TeamScore(props) {
  const [showBench, setShowBench] = useState(true);
  const [team, setTeam] = useState(null);
  const [starters, setStarters] = useState(null);
  const [bench, setBench] = useState(null);
  const [taxi, setTaxi] = useState(null);
  const [ir, setIr] = useState(null);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const teamData = await fetchTeamData(
          props.matchup.players,
          props.matchup.players_points,
          props.matchup.starters,
          props.roster.reserve,
          props.roster.taxi
        );

        setTeam(teamData);
        setStarters(getPlayersByLineupStatus(teamData, "starter"));
        setBench(getPlayersByLineupStatus(teamData, "bench"));
        setTaxi(getPlayersByLineupStatus(teamData, "taxi"));
        setIr(getPlayersByLineupStatus(teamData, "ir"));
      } catch (err) {
        console.error(err);
      }
    };
    getPlayers();
  }, [props]);

  const recievedData = () => {
    return (
      team !== null &&
      starters !== null &&
      bench !== null &&
      taxi !== null &&
      ir !== null
    );
  };

  const toggleBench = () => {
    return () => setShowBench(!showBench);
  };

  return (
    <div className="w-full h-full overflow-scroll text-center text-black cursor-default">
      {/* NAME */}
      <div className="flex flex-col items-center justify-center w-full px-2 py-3 h-[4.5rem] overflow-hidden border-2 rounded-t-lg border-stone-600 min-h-[4.5rem] bg-stone-900 lg:h-fill lg:min-h-0 lg:py-6">
        <span className="text-base font-black leading-5 lg:text-lg text-stone-300">
          {props.user.team_name}
        </span>
        <span className="pt-1 text-sm italic text-stone-400 lg:pt-0">
          {props.roster.record.wins}-{props.roster.record.losses}
        </span>
      </div>

      {/* PTS */}
      <div className="w-full py-1 bg-stone-950 border-x-2 border-stone-600">
        <span className="text-lg font-bold text-primary">
          {props.matchup.points} pts
        </span>
      </div>

      {recievedData() ? (
        <div className="w-full rounded-b-lg">
          {/* STARTERS */}
          {starters.map((player) => (
            <PlayerScore
              key={player.player_id}
              id={player.player_id}
              first_name={player.first_name}
              last_name={player.last_name}
              pts={player.pts}
              pos={player.position}
              team={player.team}
            />
          ))}

          <div
            className="flex items-center justify-center w-full transition-colors duration-300 border-2 border-b-0 cursor-pointer h-9 bg-stone-900 border-stone-600 hover:bg-stone-800 text-stone-200 hover:text-stone-500"
            onClick={toggleBench()}
          >
            <span className="tracking-[0.15rem]">BENCH</span>
          </div>

          {/* BENCH */}
          {showBench ? (
            <div className="bg-stone-400 sm:text-[0.85rem] lg:text-base text-base w-full border-b-2 border-stone-600">
              {bench.map((player) => (
                <PlayerScore
                  key={player.player_id}
                  id={player.player_id}
                  first_name={player.first_name}
                  last_name={player.last_name}
                  pts={player.pts}
                  pos={player.position}
                  team={player.team}
                />
              ))}
              <div className="flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200">
                <span className="tracking-[0.15rem]">IR</span>
              </div>
              {ir.map((player) => (
                <PlayerScore
                  key={player.player_id}
                  id={player.player_id}
                  first_name={player.first_name}
                  last_name={player.last_name}
                  pts={player.pts}
                  pos={player.position}
                  team={player.team}
                />
              ))}
              <div className="flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200">
                <span className="tracking-[0.15rem]">Taxi</span>
              </div>
              {taxi.map((player) => (
                <PlayerScore
                  key={player.player_id}
                  id={player.player_id}
                  first_name={player.first_name}
                  last_name={player.last_name}
                  pts={player.pts}
                  pos={player.position}
                  team={player.team}
                />
              ))}
            </div>
          ) : (
            <div className="w-full overflow-hidden border-t-2 border-stone-600"></div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-stone-400">
          <span className="text-lg font-bold text-stone-200">Loading...</span>
        </div>
      )}
    </div>
  );
}
