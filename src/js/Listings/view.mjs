import { getListings } from "./get.mjs";
import { allListingsURL } from "../auth_API/api.mjs";
import { showListingsCards } from "../ui/listings.mjs";
import { carouselListing } from "../ui/filteredListings.mjs";
import { message, loader } from "../data/message.mjs";

// show all listings on homepage
export async function showListings() {
  loader.innerHTML = "";
  try {
    const listings = await getListings(allListingsURL);
    localStorage.setItem("currentListings", JSON.stringify(listings));
    showListingsCards(listings);
    carouselListing(listings);
  } catch (error) {
    const pageContent = document.querySelector(".content");
    if (pageContent) {
      pageContent.classList.add("d-none");
    }
    loader.classList.add("bg-light");
    loader.innerHTML = message(error);
  }
}

showListings();
