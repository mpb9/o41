import { fetchUsers } from "../api/_helper";
import { User } from "../models/_helper";

export async function getAllUsers() {
  try {
    const usersJson = await fetchUsers();
    if (!usersJson) throw new Error("No user data available.");
    return usersJson.map((userJson) => new User(userJson));
  } catch (error) {
    console.error("getAllUsers:", error.message);
    return [];
  }
}

export function getUserByUserId(userId = "", users = []) {
  return users.find((user) => user.user_id === userId) || null;
}
