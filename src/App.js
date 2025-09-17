import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GenerateData, Home, InactiveLeague, NotFound } from "./pages/_helper";
import { IS_LEAGUE_ACTIVE } from "./utils/leagueInfo";

function App() {
  if (!IS_LEAGUE_ACTIVE) return <InactiveLeague />;

  return (
    <div className="min-h-screen bg-stone-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateData />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
