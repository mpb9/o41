import { fetchNflState } from "../api/_helper";
import { NflState } from "../models/_helper";

export async function getNflState() {
  try {
    const nflStateJson = await fetchNflState();
    if (!nflStateJson) throw new Error("No NFL State data available.");
    return new NflState(nflStateJson);
  } catch (error) {
    console.log("getNflState:", error.message);
    return null;
  }
}
