import { useEffect, useState } from "react";
import { fetchNflState } from "../api/_helper";
import { Header, Matchup } from "../components/_helper";
import {
  getAllMatchups,
  getAllRosters,
  getAllUsers,
} from "../services/_helper";

export default function Home() {
  const [error, setError] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  const [nflState, setNflState] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const interval = 5000;

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

  return (
    <div className="relative w-full min-h-screen bg-rad">
      <Header last_updated={lastUpdated} active_route="home" />
      {matchups !== null &&
      rosters !== null &&
      users !== null &&
      nflState !== null ? (
        <Matchup
          matchups={matchups}
          rosters={rosters}
          users={users}
          nflState={nflState}
        />
      ) : error != null ? (
        <div className="flex items-center justify-center w-full text-3xl text-red-600 h-full-header">
          error: {error.toLowerCase()}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full text-3xl h-full-header text-primary">
          loading matchups...
        </div>
      )}
    </div>
  );
}
