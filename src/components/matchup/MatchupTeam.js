import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Matchup, Roster, User } from "../../models/_helper";
import { Loading } from "../../pages/_helper";
import {
  getPlayersByLineupStatus,
  getPlayersByRosterAndMatchup,
} from "../../services/_helper";
import { MatchupPlayer, TeamBenchVisibilityBtn } from "../_helper";

MatchupTeam.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  roster: PropTypes.instanceOf(Roster).isRequired,
  matchup: PropTypes.instanceOf(Matchup).isRequired,
};
export default function MatchupTeam({
  user = null,
  roster = null,
  matchup = null,
}) {
  const [showBench, setShowBench] = useState(false);
  const [players, setPlayers] = useState(null);
  const [starters, setStarters] = useState([]);
  const [bench, setBench] = useState([]);
  const [taxi, setTaxi] = useState([]);
  const [ir, setIr] = useState([]);

  useEffect(() => {
    function getPlayers() {
      const updatedPlayers = getPlayersByRosterAndMatchup(roster, matchup);
      setPlayers(updatedPlayers);
      setStarters(getPlayersByLineupStatus(updatedPlayers, "starter"));
      setBench(getPlayersByLineupStatus(updatedPlayers, "bench"));
      setTaxi(getPlayersByLineupStatus(updatedPlayers, "taxi"));
      setIr(getPlayersByLineupStatus(updatedPlayers, "ir"));
    }
    getPlayers();
  }, [matchup, roster]);

  function onBenchVisibilityChange(updatedShowBench) {
    setShowBench(updatedShowBench);
  }

  if (
    user === null ||
    roster === null ||
    matchup === null ||
    players === null
  ) {
    return <Loading />;
  }
  return (
    <div className="w-full h-full text-black text-center cursor-default">
      {/* TEAM NAME */}
      <div className="flex flex-col justify-center items-center bg-stone-900 p-2 lg:py-3 pt-2.5 border-2 border-secondary rounded-t-lg w-full overflow-hidden">
        <span className="font-black text-light text-base lg:text-lg leading-5">
          {user.team_name}
        </span>
        <span className="pt-1 lg:pt-0 text-stone-500 text-sm 2xl:text-base italic tracking-widest">
          {roster.record.wins}-{roster.record.losses}
        </span>
      </div>

      {/* POINTS */}
      <div className="bg-dark py-1 border-secondary border-x-2 border-b-1 w-full">
        <span className="font-bold text-[1.075rem] text-primary">
          {matchup.pts} pts
        </span>
      </div>

      <div className="w-full">
        {/* STARTERS */}
        {starters.map((player) => (
          <MatchupPlayer key={player.player_id} player={player} />
        ))}

        {/* BENCH */}
        <TeamBenchVisibilityBtn
          show_bench={showBench}
          onBenchVisibilityChange={onBenchVisibilityChange}
        />
        {showBench ? (
          <div className="bg-secondary pb-0.5 border-secondary border-b-1 rounded-b w-full sm:text-[0.85rem] text-base lg:text-base">
            {bench.map((player) => (
              <MatchupPlayer key={player.player_id} player={player} />
            ))}

            {/* IR */}
            <div className="flex justify-center items-center bg-stone-900 py-[0.3167rem] border-2 border-secondary border-b-1 w-full text-light">
              <span className="tracking-[0.25rem]">IR</span>
            </div>
            {ir.map((player) => (
              <MatchupPlayer key={player.player_id} player={player} />
            ))}

            {/* TAXI */}
            <div className="flex justify-center items-center bg-stone-900 py-[0.3167rem] border-2 border-secondary border-b-1 w-full text-300 text-light">
              <span className="tracking-[0.25rem]">TAXI</span>
            </div>
            {taxi.map((player) => (
              <MatchupPlayer key={player.player_id} player={player} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
