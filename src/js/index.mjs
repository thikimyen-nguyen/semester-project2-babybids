// Show search form

import { allListings } from "./auth_API/api.mjs";

async function getListings(url) {
  const response = await fetch(url);
  const listings = await response.json();
  if (response.ok) {
    console.log(listings);
    return listings;
  } else {
    throw new Error("Could not get posts!");
  }
}
getListings(allListings);
