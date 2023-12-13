import { singleListingURL } from "../auth_API/api.mjs";
import { getOneListing } from "../listing/get.mjs";
import { message, loader } from "../data/message.mjs";
import { singleListingCard } from "../ui/listing.mjs";

/**
 * Asynchronously fetches and displays details for a single listing from the specified URL.
 *
 * @export
 * @param {string} url - The URL from which to fetch the listing details.
 */
export async function showSingleListing(url) {
  loader.innerHTML = "";
  try {
    const listing = await getOneListing(url);
    localStorage.setItem("currentListing", JSON.stringify(listing));

    singleListingCard(listing);
  } catch (error) {
    const pageContent = document.querySelector(".content");
    pageContent.classList.add("d-none");
    loader.classList.add("bg-light");
    loader.innerHTML = message(error);
  }
}
showSingleListing(singleListingURL);
