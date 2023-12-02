/**
 * get source of posts to be searched
 * create function to filter posts with param
 * get input search and pass as param
 */
import { showListingsCards } from "../ui/listings.mjs";
import { scrollToListings } from "./scrollToListing.mjs";
scrollToListings()
export const searchInput = document.querySelector(".search-form");

// get source of posts to be searched


function search(param) {
  const listings = JSON.parse(localStorage.getItem("currentListings"));
  const filteredListings = listings.filter((listing) => {
   
    if (listing.description !== null && listing.title !== null) {
      if (listing.title.toLowerCase().includes(param) || listing.description.toLowerCase().includes(param) || listing.tags.join(" ").toLowerCase().includes(param)) {
        return listing
      }
    }
  });
  return filteredListings
}

/**
 * Get input search value from user and pass as param in search(param)
 * Get results as an array of posts
 * get the number of posts 
 * reset search form
 * Show the number of posts result and show posts in html with postsHtml()
 */
 function getSearchResults() {
  searchInput.addEventListener("submit", function (event) {
      event.preventDefault();
      // Assuming you want to clear a key named "yourKey"
      localStorage.removeItem("searchResults");
      const searchValue = event.target.search.value.toLowerCase();
      const results = search(searchValue);
      localStorage.setItem("searchResults", JSON.stringify(results));
      searchInput.reset();
      window.location.href = "search.html"
      console.log(results)
    
      
    })
  
  
}

function showResults() {
  // Retrieve searchResults from local storage
  const searchResultsString = localStorage.getItem("searchResults");

  // Check if searchResultsString is null or undefined
  if (searchResultsString === null || searchResultsString === undefined) {
    console.error("No search results found in local storage.");
    return;
  }

  // Parse the JSON data
  const searchResults = JSON.parse(searchResultsString);

  // Check if searchResults is an array
  if (!Array.isArray(searchResults)) {
    console.error("Invalid search results data in local storage.");
    return;
  }

  // Calculate the number of results
  const numberOfResults = searchResults.length;

  // Select the HTML element with the class "resultsNumber"
  const searchNote = document.querySelector(".resultsNumber");

  // Update the content of the element with the number of results
  searchNote.innerText = numberOfResults + " result" + (numberOfResults !== 1 ? "s" : "") + " were found.";

  // Call a function to display the search results
  showListingsCards(searchResults);

  // Log the search results to the console for debugging or verification
  console.log(searchResults);
}





// function showResults() {
 
//   const searchResults = JSON.parse(localStorage.getItem("searchResults"));
//   const numberOfResults = searchResults.length;
//   const searchNote = document.querySelector(".resultsNumber");
//   searchNote.innerText = numberOfResults + " result were found.";
//   showListingsCards(searchResults);
//   console.log(searchResults)

// }
getSearchResults() 

showResults()


export {getSearchResults}