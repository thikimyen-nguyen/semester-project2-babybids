import {getListings} from "./get.mjs";
import { allListingsURL } from "../auth_API/api.mjs";
import {listingCard, carouselListing } from "./ui.mjs";

async function showListings(url) {
  const listings = await getListings(url);
  localStorage.setItem("currentListings", JSON.stringify(listings));
  console.log (listings);
  listingCard(listings);
  carouselListing(listings)
}

showListings(allListingsURL);

