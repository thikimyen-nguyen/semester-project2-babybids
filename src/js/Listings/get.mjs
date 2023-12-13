//  get all listings
/**
 * Asynchronously fetches a list of listings from the specified URL.
 *
 * @param {string} url - The URL from which to fetch the list of listings.
 * @returns {Array} An array of listings if the request is successful.
 * @throws {Error} Throws an error if the request to fetch the list of listings is not successful.
 
 */
async function getListings(url) {
  const response = await fetch(url);
  const listings = await response.json();
  if (response.ok) {
    return listings;
  } else {
    throw new Error("Could not get listings!");
  }
}

export { getListings };
