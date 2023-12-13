import { message } from "../../data/message.mjs";
import { alertModal } from "../../ui/alert.mjs";

/**
 Asynchronously sends a login request to the specified URL with the provided user data.
 *
 * @param {string} url - The URL to which the login request will be sent.
 * @param {Object} data - The user data to be included in the login request body.
 * @returns {Object} An object of profile user if the login is successful.
 * @throws {Error} Throws an error if the login request is not successful. 
 */
async function login(url, data) {
  try {
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postOption);
    const json = await response.json();
    const { accessToken, name } = json;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("currentUser", name);

    if (response.ok) {
      alertModal("Success!", "You are logged In!");
    } else {
      throw new Error("Please log in again with correct email or password");
    }
    return json;
  } catch (error) {
    const loader = document.querySelector(".modalLoader");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
}

export { login };
