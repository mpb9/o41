import { API__SLEEPER } from "../utils/apiRoutes";

export default async function fetchRosters() {
  try {
    const response = await fetch(API__SLEEPER.rosters);
    if (!response.ok) {
      throw new Error(`Error fetching rosters: ${response.statusText}`);
    }
    const rosters = await response.json();
    return rosters;
  } catch (error) {
    console.error("fetchRosters:", error.message);
  }
}
