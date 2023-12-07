import { showProfileHTML } from "../../ui/profile.mjs";
import { userToken } from "../../auth_API/header.mjs";
import { currentProfileURL, getCurrentProfile } from "./get.mjs";

export async function showUserProfile() {
  const userProfileContainer = document.querySelector("#userProfile");
  const loginNav = document.querySelector("#loginNav");
  const logoutNav = document.querySelector("#logoutNav");

  if (userToken) {
    const currentUser = await getCurrentProfile(currentProfileURL);

    const { name, avatar, credits } = currentUser;
    const user = {
      userName: name,
      credits: credits,
      avatar: avatar,
    };
    console.log(currentUser);
    userProfileContainer.classList.remove("d-none");
    loginNav.classList.add("d-none");
    logoutNav.classList.remove("d-none");
    showProfileHTML(user);
  }
}
