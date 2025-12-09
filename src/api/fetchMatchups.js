import { API__SLEEPER } from "../utils/apiRoutes";

export default async function fetchMatchups(week = "") {
  try {
    const response = await fetch(API__SLEEPER.matchups(week));
    if (!response.ok) {
      throw new Error(`Error fetching matchups: ${response.statusText}`);
    }
    const matchups = await response.json();
    return matchups;
  } catch (error) {
    console.error("fetchMatchups:", error.message);
  }
}
