import { message } from "../../data/message.mjs";
import { alertModal } from "../../ui/alert.mjs";

// post data to register Account
/**
 * Asynchronously sends a registration request to the specified URL with the provided user registration data.
 *
 * @param {string} url - The URL to which the registration request will be sent.
 * @param {Object} data - The user registration data to be included in the request body.
 * @returns {Object} An object of user profile if the registration is successful.
 * @throws {Error} Throws an error if the registration request is not successful.
 
 */
async function register(url, data) {
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
    if (response.ok) {
      alertModal(
        "Success!",
        "Your account was registered successfully! You can now Log In",
      );
    } else {
      throw new Error(
        "Could not create account. It may be existed. You can try login or create new account",
      );
    }

    return json;
  } catch (error) {
    const loader = document.querySelector(".registerModalLoader");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
}

export { register };
