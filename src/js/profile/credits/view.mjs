import { showProfileHTML } from "../../ui/profile.mjs";
import { userToken } from "../../auth_API/header.mjs";

function getCurrentUser() {
  const currentUserName = localStorage.getItem("currentUser");
  const currentAvatar = localStorage.getItem("avatar");
  const currentCredits = localStorage.getItem("credits");

  const user = {
    "userName": currentUserName,
    "credits": currentCredits, 
    "avatar": currentAvatar
  }
  return user
}

export function showUserProfile() {
  const userProfileContainer = document.querySelector("#userProfile");
  const loginNav =  document.querySelector("#loginNav");
  const logoutNav = document.querySelector("#logoutNav");
  if (userToken) {
    userProfileContainer.classList.remove("d-none");
    loginNav.classList.add("d-none")
    logoutNav.classList.remove("d-none")
    const currentUser = getCurrentUser()
    showProfileHTML(currentUser)

  }
  
}