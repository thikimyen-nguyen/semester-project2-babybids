import { userToken } from "../../auth_API/token.mjs";
import { message, loader } from "../../data/message.mjs";
import { alertModal } from "../../ui/alert.mjs";

/**
 * Asynchronously posts a bid to the specified URL with the provided data.
 * @export
 * @param {string} url - The URL to which the bid will be posted.
 * @param {Object} data - The data as an object of bid amount which got from bid input
 * @returns {Object} An object of listing detail with new bid if the bid is successful.
 * @throws {Error} Throws an error if the bid request is not successful.
 
 */
export async function postBid(url, data) {
  try {
    const postDataOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postDataOption);
    const json = await response.json();
    if (response.ok) {
      alertModal("Success!", "Your bid is successful!");

      return json;
    } else {
      throw new Error("Could not bid on this item");
    }
  } catch (error) {
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
}
