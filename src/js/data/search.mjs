import { showListingsCards } from "../ui/listings.mjs";
import * as login from "../profile/login/index.mjs";
import * as register from "../profile/register/index.mjs";
import { userToken } from "../auth_API/token.mjs";
import { loginNav, logoutNav } from "../profile/user/view.mjs";
import { logout } from "../profile/logout/index.mjs";
import { scrollToListings } from "./scrollToListing.mjs";
scrollToListings();

/**
 * get source of posts to be searched
 * create function to filter posts with param
 * get input search and pass as param
 */
const searchInput = document.querySelector(".search-form");

function search(param) {
  const listings = JSON.parse(localStorage.getItem("currentListings"));
  const filteredListings = listings.filter((listing) => {
    if (listing.description !== null && listing.title !== null) {
      if (
        listing.title.toLowerCase().includes(param) ||
        listing.description.toLowerCase().includes(param) ||
        listing.tags.join(" ").toLowerCase().includes(param)
      ) {
        return listing;
      }
    }
  });
  return filteredListings;
}

/**
 * Get input search value from user and pass as param in search(param)
 * Get results as an array of posts
 * get the number of posts
 * reset search form
 * Show the number of posts result and show posts in html with postsHtml()
 */
export function getSearchResults() {
  searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.removeItem("searchResults");
    window.location.href = "../search.html";
    // Assuming you want to clear a key named "yourKey"

    const searchValue = event.target.search.value.toLowerCase();
    const results = search(searchValue);
    localStorage.setItem("searchResults", JSON.stringify(results));
    searchInput.reset();

    console.log(results);
  });
}

function showResults() {
  const searchNote = document.querySelector(".resultsNumber");
  if (searchNote !== null) {
    getSearchResults();
    const searchResults = JSON.parse(localStorage.getItem("searchResults"));
    const numberOfResults = searchResults.length;

    searchNote.innerText = numberOfResults + " result were found.";
    showListingsCards(searchResults);
    console.log(searchResults);
  }
}

showResults();
// navbar shown

if (userToken) {
  loginNav.classList.add("d-none");
  logoutNav.classList.remove("d-none");
}

// logout
logout();
