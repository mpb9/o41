import { API__SLEEPER } from "../constants/apiRoutes";

export default async function fetchUsers() {
  try {
    const response = await fetch(API__SLEEPER.users);
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("fetchUsers:", error.message);
  }
}
