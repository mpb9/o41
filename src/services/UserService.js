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

export function getAllUsersByRosters(rosters = [], users = []) {
  let usersInRosters = [];
  rosters.forEach((roster) => {
    users.forEach((user) => {
      if (roster.user_id === user.user_id) usersInRosters.push(user);
    });
  });
  return usersInRosters;
}

export function getUserByUserId(user_id = "", users = []) {
  return users.find((user) => user.user_id === user_id) || null;
}

export function getUserByRosterId(roster_id = null, rosters = [], users = []) {
  let foundUser = null;

  rosters.forEach((roster) => {
    if (roster.roster_id === roster_id) {
      users.forEach((user) => {
        if (user.user_id === roster.user_id) {
          foundUser = user;
        }
      });
    }
  });
  return foundUser;
}
