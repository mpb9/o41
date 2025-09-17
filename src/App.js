import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchNflState } from "./api/_helper";
import {
  GenerateData,
  Home,
  InactiveLeague,
  Matchups,
  NotFound,
} from "./pages/_helper";

import { getAllMatchups, getAllRosters, getAllUsers } from "./services/_helper";
import { IS_LEAGUE_ACTIVE } from "./utils/leagueInfo";

function App() {
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

  if (!IS_LEAGUE_ACTIVE) return <InactiveLeague />;

  if (
    users === null ||
    rosters === null ||
    matchups === null ||
    nflState === null
  ) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-stone-800">
        <span className="text-lg font-bold text-stone-200">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-stone-800">
        <span className="text-lg font-bold text-red-600">{`Error: ${error}`}</span>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-stone-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/matchups"
            element={
              <Matchups
                matchups={matchups}
                rosters={rosters}
                users={users}
                nfl_state={nflState}
                last_updated={lastUpdated}
              />
            }
          />
          <Route path="/generate" element={<GenerateData />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
