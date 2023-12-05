import { userToken } from "../../auth_API/header.mjs";
import { profileURL } from "../../auth_API/api.mjs";

export async function updateAvatar(url, data) {
 try {
  const putDataOption = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, putDataOption);
  const json = await response.json();
  if (response.ok) {
    alert("Your avatar is updated!");
    window.location.reload();
    return json;
    
  } else {
    throw new Error("Could not update avatar!")
  }
 } catch (error) {
  const loader = document.querySelector(".mediaNote");
  loader.classList.add("text-secondary", "bg-light");
  loader.innerHTML = message("error", error);
 }
  
}

const mediaForm = document.querySelector("#updateAvatarForm");
const avatarInput = document.querySelector("#media");
const currentUser = localStorage.getItem("currentUser");
const updateMediaURL = profileURL + `/${currentUser}/media`;

export function updateMedia() {
  mediaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const newAvatar = {
      "avatar": avatarInput.value,
    };
   
      updateAvatar(updateMediaURL, newAvatar);
 
  })
}

// get new update user profile to show new media
