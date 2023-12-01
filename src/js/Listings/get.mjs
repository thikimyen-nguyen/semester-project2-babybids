//  get all listings
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
