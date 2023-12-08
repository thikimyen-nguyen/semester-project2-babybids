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
export async function getCurrentProfile(url) {
  const response = await fetch(url, getOption);
  const user = await response.json();
  // const {avatar, credits} = user;

  // localStorage.setItem("avatar", avatar);
  // localStorage.setItem("credits", credits);
  if (response.ok) {
    console.log(user);
    return user;
  } else {
    throw new Error("Could not get current user detail!");
  }
}

//  get current user listings
export async function getCurrentUserListings(url) {
  const response = await fetch(url, getOption);
  const listings = await response.json();

  if (response.ok) {
    return listings;
  } else {
    throw new Error("Could not get current user listings!");
  }
}
