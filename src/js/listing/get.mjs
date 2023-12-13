/**
 * Asynchronously fetches details for a single listing from the specified URL.
 *
 * @export
 * @param {string} url - The URL from which to fetch the listing details.
 * @returns {Object} The listing details if the request is successful.
 * @throws {Error} Throws an error if the request to fetch the listing details is not successful.
 */
export async function getOneListing(url) {
  const response = await fetch(url);
  const listing = await response.json();
  if (response.ok) {
    return listing;
  } else {
    throw new Error("Could not get listing detail!");
  }
}
