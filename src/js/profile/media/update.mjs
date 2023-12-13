import { userToken } from "../../auth_API/token.mjs";
import { profileURL } from "../../auth_API/api.mjs";
import { message } from "../../data/message.mjs";
import { alertModal } from "../../ui/alert.mjs";

/**
 * Asynchronously updates the user's avatar by sending a PUT request to the specified URL with the provided data.
 * @export
 * @param {string} url - The URL to which the PUT request for updating the avatar will be sent.
 * @param {Object} data - An object of media data
 * @returns {Object} An object of profile user with new media updated if the update is successful.
 * @throws {Error} Throws an error if the avatar update request is not successful.

 */
export async function postAvatar(url, data) {
  try {
    const putDataOption = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, putDataOption);
    const json = await response.json();
    if (response.ok) {
      alertModal("Success!", "Your avatar is updated!");

      return json;
    } else {
      throw new Error("Could not update avatar!");
    }
  } catch (error) {
    const loader = document.querySelector(".mediaNote");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
}

const mediaForm = document.querySelector("#updateAvatarForm");
const avatarInput = document.querySelector("#media");
const currentUser = localStorage.getItem("currentUser");
const updateMediaURL = profileURL + `/${currentUser}/media`;

/**
 * Sets up an event listener for the media form submission to update the user's avatar.
 *
 * @export
 */
export function updateMedia() {
  mediaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newAvatar = {
      avatar: avatarInput.value,
    };

    postAvatar(updateMediaURL, newAvatar);
  });
}
