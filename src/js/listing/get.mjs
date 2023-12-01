//  get one listing
export async function getOneListing(url) {
  const response = await fetch(url);
  const listing = await response.json();
  if (response.ok) {
    return listing;
  } else {
    throw new Error("Could not get listing detail!");
  }
}
