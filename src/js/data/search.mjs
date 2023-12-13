import { showListingsCards } from "../ui/listings.mjs";
import * as login from "../profile/login/index.mjs";
import * as register from "../profile/register/index.mjs";
import { userToken } from "../auth_API/token.mjs";
import { loginNav, logoutNav, profileNav } from "../profile/user/view.mjs";
import { logout } from "../profile/logout/index.mjs";
import { scrollToListings } from "./scrollToListing.mjs";
scrollToListings();

/**
 * get source of listings to be searched
 * create function to filter listings with param
 * get input search and pass as param
 */
const searchInput = document.querySelector(".search-form");

/**
 * Searches for listings based on a specified parameter which will be later got from search input form
 *
 * @param {string} param - The search parameter to match against listing titles, descriptions, and tags.
 * @returns {Array} An array of filtered listings that match the search parameter.
 */
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
 * Get results as an array of listings
 * reset search form
 * Show the number of listings result and show listings in html with showListingsCards
 */

/**
 * Sets up an event listener to handle form submission for search input.
 * Clears existing search results in local storage, performs a search based on the entered value,
 * stores the search results in local storage, and navigates to the search results page.
 * @export
 */
export function getSearchResults() {
  searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.removeItem("searchResults");
    window.location.href = "../search.html";

    const searchValue = event.target.search.value.toLowerCase();
    const results = search(searchValue);
    localStorage.setItem("searchResults", JSON.stringify(results));
    searchInput.reset();
  });
}

/**
 * Displays search results on the page.
 * Retrieves search results from local storage, updates the number of results displayed,
 * and renders the search results using the showListingsCards function.
 */
function showResults() {
  const searchNote = document.querySelector(".resultsNumber");
  if (searchNote !== null) {
    getSearchResults();
    const searchResults = JSON.parse(localStorage.getItem("searchResults"));
    const numberOfResults = searchResults.length;

    searchNote.innerText = numberOfResults + " results were found.";
    showListingsCards(searchResults);
  }
}

showResults();

// navbar shown

if (userToken) {
  loginNav.classList.add("d-none");
  logoutNav.classList.remove("d-none");
  profileNav.classList.remove("d-none");
}

// logout
logout();
