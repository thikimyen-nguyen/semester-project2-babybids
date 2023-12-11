import { showProfileHTML } from "../../ui/profile.mjs";
import { userToken } from "../../auth_API/token.mjs";
import { currentProfileURL, getCurrentProfile } from "./get.mjs";
import { message, loader } from "../../data/message.mjs";
export const loginNav = document.querySelector("#loginNav");
export const logoutNav = document.querySelector("#logoutNav");
export async function showUserProfile() {
  try {
    const userProfileContainer = document.querySelector("#userProfile");

    if (userToken) {
      const currentUser = await getCurrentProfile(currentProfileURL);

      const { name, avatar, credits } = currentUser;
      const user = {
        userName: name,
        credits: credits,
        avatar: avatar,
      };

      userProfileContainer.classList.remove("d-none");
      loginNav.classList.add("d-none");
      logoutNav.classList.remove("d-none");
      showProfileHTML(user);
    }
  } catch (error) {
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message("error", error);
  }
}
