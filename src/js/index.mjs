// Show search form
import { searchIcon, showSearchForm } from "../js/components/search.mjs";

searchIcon.addEventListener("click", showSearchForm);

// import { allListings } from "./auth_API/api.mjs";

// async function getListings(url) {
//   const response = await fetch(url);
//   const listings = await response.json();
//   if (response.ok) {
//     console.log(listings);
//     return listings;
//   } else {
//     throw new Error("Could not get posts!");
//   }
// }
// getListings(allListings);
