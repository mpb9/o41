import { API__SLEEPER } from "../utils/apiRoutes";

export default async function fetchNflState() {
  try {
    const response = await fetch(API__SLEEPER.nfl_state);
    if (!response.ok) {
      throw new Error(`Error fetching NFL state: ${response.statusText}`);
    }
    const nflState = await response.json();
    return nflState;
  } catch (error) {
    console.error("fetchNflState:", error.message);
  }
}
