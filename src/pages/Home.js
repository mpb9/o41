import { useEffect, useState } from "react";
import { fetchNflState } from "../api/_helper";
import { Header } from "../components/_helper";
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
      <Header active_route="home" />
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
          <h1 className="mt-4 text-5xl font-black">ORDER 41</h1>

          {/* ORDER 41 */}
          {/* MATCHUP PREVIEWS */}
          {/* LEAGUE DETAILS */}
        </div>
      </div>
    </div>
  );
}
