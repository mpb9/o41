import { ArrowFatRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchNflState } from "../api/_helper";
import { Header, TeamScore } from "../components/_helper";
import {
  getAllMatchups,
  getAllRosters,
  getAllUsers,
  getMatchupByRosterId,
  getRostersByMatchupId,
  getUserByUserId,
} from "../services/_helper";

export default function Home() {
  const [error, setError] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  const [nflState, setNflState] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentMatchup, setCurrentMatchup] = useState(1);
  const interval = 15000;

  useEffect(() => {
    async function getUsers() {
      try {
        const updatedUsers = await getAllUsers();
        if (!updatedUsers || updatedUsers.length === 0)
          throw new Error("No user data available.");
        setUsers(updatedUsers);
        setError(null);
      } catch (err) {
        console.error("Home: Error fetching users.");
        setError(err.message);
      }
    }
    async function getRosters() {
      try {
        const updatedRosters = await getAllRosters();
        if (!updatedRosters || updatedRosters.length === 0)
          throw new Error("No roster data available.");
        setRosters(updatedRosters);
        setError(null);
      } catch (err) {
        console.error("Home: Error fetching rosters.");
        setError(err.message);
      }
    }
    async function getMatchups() {
      try {
        const updatedMatchups = await getAllMatchups();
        if (!updatedMatchups || updatedMatchups.length === 0)
          throw new Error("No matchup data available.");
        setMatchups(updatedMatchups);
        setLastUpdated(new Date());
        setError(null);
      } catch (err) {
        console.error("Home: Error fetching matchups.");
        setError(err.message);
      }
    }
    async function getNflState() {
      try {
        const updatedNflState = await fetchNflState();
        if (!updatedNflState) throw new Error("No NFL state data available.");
        setNflState(updatedNflState);
        setError(null);
      } catch (err) {
        console.error("Home: Error fetching NFL state.");
        setError(err.message);
      }
    }

    getUsers();
    getRosters();
    getMatchups();
    getNflState();

    const timeout = setInterval(getMatchups, interval);
    return () => clearInterval(timeout);
  }, []);

  function toggleMatchup() {
    if (currentMatchup >= matchups.length / 2) setCurrentMatchup(1);
    else setCurrentMatchup(currentMatchup + 1);
  }

  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header lastUpdated={lastUpdated} activeRoute="Home" />
      {matchups !== null &&
      rosters !== null &&
      users !== null &&
      currentMatchup !== null ? (
        <div className="flex flex-col items-center justify-start w-full overflow-scroll h-full-header">
          <div className="w-[95%] px-4 h-full">
            <div className="flex items-center justify-center w-full h-20">
              <div className="hidden w-1/3 sm:block"></div>
              <h1 className="w-1/2 text-2xl text-center cursor-default sm:text-3xl sm:w-1/3 text-stone-200">
                {nflState?.season_type === "regular"
                  ? `MATCHUPS - WEEK ${nflState?.display_week}`
                  : `THE PLAYOFFS`}
              </h1>
              <div className="flex items-center pt-[3px] justify-end w-1/2 h-full sm:w-1/3 md:pr-14 text-primary">
                <button
                  className="flex items-center justify-center px-3 text-[1.3rem] rounded-lg h-[50%] bg-stone-900 hover:bg-[#aed998] hover:text-stone-900"
                  onClick={toggleMatchup}
                >
                  <span>NEXT</span>
                  <ArrowFatRight weight="fill" className="ml-2" />
                </button>
              </div>
            </div>
            {getRostersByMatchupId(currentMatchup, rosters, matchups).length >=
            3 ? (
              <div className="grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 md:grid-cols-3 xl:gap-4 xl:mx-10">
                {getRostersByMatchupId(currentMatchup, rosters, matchups).map(
                  (roster) => (
                    <TeamScore
                      key={roster.user_id}
                      user={getUserByUserId(roster.user_id, users)}
                      roster={roster}
                      matchup={getMatchupByRosterId(roster.roster_id, matchups)}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 xl:gap-8 xl:mx-14">
                {getRostersByMatchupId(currentMatchup, rosters, matchups).map(
                  (roster) => (
                    <TeamScore
                      key={roster.user_id}
                      user={getUserByUserId(roster.user_id, users)}
                      roster={roster}
                      matchup={getMatchupByRosterId(roster.roster_id, matchups)}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      ) : error != null ? (
        // Error
        <div className="flex items-center justify-center w-full text-3xl text-red-600 h-full-header">
          error: {error.toLowerCase()}
        </div>
      ) : (
        // Loading
        <div className="flex items-center justify-center w-full text-3xl h-full-header text-primary">
          loading matchups...
        </div>
      )}
    </div>
  );
}
