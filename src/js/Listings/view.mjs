import { getListings } from "./get.mjs";
import { allListingsURL } from "../auth_API/api.mjs";
import { listingCard } from "../ui/listings.mjs";
import { carouselListing } from "../ui/filteredListings.mjs";
import { message, loader } from "../data/message.mjs";

export async function showListings(url) {
  loader.innerHTML = "";
  try {
    const listings = await getListings(url);
    localStorage.setItem("currentListings", JSON.stringify(listings));

    listingCard(listings);
    carouselListing(listings);
  } catch (error) {
    const pageContent = document.querySelector(".content");
    pageContent.classList.add("d-none")
    loader.classList.add("bg-light");
    loader.innerHTML = message("error", error);
  }
}

showListings(allListingsURL);
