import { userToken } from "../../auth_API/token.mjs";
import { alertModal } from "../../ui/alert.mjs";

// post data to register Account
/**
 * Asynchronously sends a POST request to create a resource at the specified URL with the provided data.
  * @export
 * @param {string} url - The URL where the resource will be created.
 * @param {Object} data - The data to be included in the POST request body which got from input form
 * @returns {Object} An object of new listing if the resource creation is successful.
 * @throws {Error} Throws an error if the resource creation request is not successful.
 
 */
export async function create(url, data) {
  const postOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, postOption);
  const json = await response.json();
  if (response.ok) {
    alertModal("Success!", "Your listing was created successfully!");
  } else {
    throw new Error("Could not create listing.Please try again!");
  }

  return json;
}
