import { singleListingURL } from "../auth_API/api.mjs";
import { getOneListing } from "../listing/get.mjs";
import { message, loader } from "../data/message.mjs";




export async function showSingleListing(url) {
  loader.innerHTML = "";
  try {
    const listing = await getOneListing(url);
    localStorage.setItem("currentListing", JSON.stringify(listing));
    console.log (listing);
    

  } catch (error) {
    const pageContent = document.querySelector(".content");
    // pageContent.classList.add("d-none")
    loader.classList.add("bg-light")
    loader.innerHTML = message("error", error);
  }
  
}
showSingleListing(singleListingURL);