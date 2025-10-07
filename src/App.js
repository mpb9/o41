import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchNflState } from "./api/_helper";
import {
  Bylaws,
  GenerateData,
  Home,
  InactiveLeague,
  Matchups,
  NotFound,
  Standings,
  Teams,
} from "./pages/_helper";
import { getAllMatchups, getAllRosters, getAllUsers } from "./services/_helper";
import { IS_LEAGUE_ACTIVE } from "./utils/leagueInfo";

const RELOAD_INTERVAL_MS = {
  matchups: 15000,
  nfl_state: 60000,
};

function App() {
  const [error, setError] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  const [nflState, setNflState] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // MARK: useEffect([])
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
    getNflState();

    const timeout = setInterval(getNflState, RELOAD_INTERVAL_MS.nfl_state);
    return () => clearInterval(timeout);
  }, []);

  // MARK: useEffect([nflState])
  useEffect(() => {
    async function getMatchups() {
      try {
        const updatedMatchups = await getAllMatchups(nflState);
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
    getMatchups();
    const timeout = setInterval(getMatchups, RELOAD_INTERVAL_MS.matchups);
    return () => clearInterval(timeout);
  }, [nflState]);

  // MARK: INACTIVE
  if (!IS_LEAGUE_ACTIVE) return <InactiveLeague />;

  // MARK: LOADING
  if (
    users === null ||
    rosters === null ||
    matchups === null ||
    nflState === null
  ) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-stone-800">
        <div className="flex items-center justify-center w-full text-3xl h-full-header text-primary">
          loading...
        </div>
      </div>
    );
  }

  // MARK: ERROR
  if (error) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-stone-800">
        <span className="text-lg font-bold text-red-600">{`Error: ${error}`}</span>
      </div>
    );
  }

  // MARK: BASE
  return (
    <div className="min-h-screen bg-stone-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
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
          <Route path="/standings" element={<Standings />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/generate" element={<GenerateData />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
