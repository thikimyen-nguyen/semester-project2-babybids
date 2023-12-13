//  get current user info

import { profileURL } from "../../auth_API/api.mjs";
import { userToken } from "../../auth_API/token.mjs";

export const currentUserName = localStorage.getItem("currentUser");

export const currentProfileURL = profileURL + `/${currentUserName}`;
const getOption = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  },
};
//  get current user profile
/**
 *  Asynchronously retrieves the current user's profile information by sending a GET request to the specified URL.
 * @export
 * @param {string} url - The URL from which to retrieve the current user's profile information.
 * @returns {Object} An object of the current user's profile details.
 * @throws {Error} Throws an error if the request to get the current user's profile is not successful.
 */
export async function getCurrentProfile(url) {
  const response = await fetch(url, getOption);
  const user = await response.json();

  if (response.ok) {
    return user;
  } else {
    throw new Error("Could not get current user detail!");
  }
}

//  get current user listings
/**
 * Asynchronously retrieves the current user's listings by sending a GET request to the specified URL.
 * @export
 * @param {string} url - The URL from which to retrieve the current user's listings.
 * @returns {Array} An array of the current user's listings.
 * @throws {Error} Throws an error if the request to get the current user's listings is not successful.

 */
export async function getCurrentUserListings(url) {
  const response = await fetch(url, getOption);
  const listings = await response.json();

  if (response.ok) {
    return listings;
  } else {
    throw new Error("Could not get current user listings!");
  }
}
