//  get current user info

import { profileURL } from "../../auth_API/api.mjs";
import { userToken } from "../../auth_API/header.mjs";

const currentUserName = localStorage.getItem("currentUser");

export const currentProfileURL = profileURL + `/${currentUserName}`;

export async function getCurrentProfile(url) {
  const postOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const response = await fetch(url, postOption);
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
