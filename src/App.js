import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchNflState } from "./api/_helper";
import { IS_LEAGUE_ACTIVE } from "./constants/leagueInfo";
import {
  Bylaws,
  GenerateData,
  InactiveLeague,
  League,
  Loading,
  Matchups,
  NotFound,
  Standings,
  Teams,
} from "./pages/_helper";
import {
  getAllLeagues,
  getAllMatchups,
  getAllRosters,
  getAllUsers,
} from "./services/_helper";

const RELOAD_INTERVAL_MS = {
  matchups: 10000,
  nfl_state: 30000,
};

function App() {
  const [leagues, setLeagues] = useState(null);
  const [users, setUsers] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [nflState, setNflState] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  // MARK: useEffect([])
  // info: leagues, users, roster, nflState
  useEffect(() => {
    async function getLeagues() {
      try {
        const updatedLeagues = await getAllLeagues();
        if (!updatedLeagues) throw new Error("No leagues data available.");
        setLeagues(updatedLeagues);
        setError(null);
      } catch (err) {
        console.error("App: Error fetching leagues.");
        setError(err.message);
      }
    }
    async function getUsers() {
      try {
        const updatedUsers = await getAllUsers();
        if (!updatedUsers || updatedUsers.length === 0)
          throw new Error("No user data available.");
        setUsers(updatedUsers);
        setError(null);
      } catch (err) {
        console.error("App: Error fetching users.");
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
        console.error("App: Error fetching rosters.");
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
        console.error("App: Error fetching NFL state.");
        setError(err.message);
      }
    }
    getLeagues();
    getUsers();
    getRosters();
    getNflState();

    const timeout = setInterval(getNflState, RELOAD_INTERVAL_MS.nfl_state);
    return () => clearInterval(timeout);
  }, []);

  // MARK: useEffect([nflState])
  // info: matchups, lastUpdated
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
        console.error("App: Error fetching matchups.");
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
    leagues === null ||
    users === null ||
    rosters === null ||
    matchups === null ||
    nflState === null
  ) {
    return <Loading />;
  }

  // MARK: ERROR
  if (error) {
    return (
      <div className="flex justify-center items-center bg-stone-800 w-full min-h-screen">
        <span className="font-bold text-red-600 text-lg">{`Error: ${error}`}</span>
      </div>
    );
  }

  // MARK: BASE
  return (
    <div className="bg-rad-outer min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/league"
            element={
              <League
                leagues={leagues}
                rosters={rosters}
                users={users}
                nfl_state={nflState}
              />
            }
          />
          <Route
            path="/teams"
            element={<Teams users={users} rosters={rosters} />}
          />
          <Route
            path="/"
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
          <Route
            path="/standings"
            element={
              <Standings
                leagues={leagues}
                rosters={rosters}
                users={users}
                nfl_state={nflState}
              />
            }
          />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/generate" element={<GenerateData />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
