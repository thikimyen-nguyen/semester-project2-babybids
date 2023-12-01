/**
 * get source of posts to be searched
 * create function to filter posts with param
 * get input search and pass as param
 */
import { showListingsCards } from "../ui/listings.mjs";
const searchInput = document.querySelector(".search-form");

// get source of posts to be searched
const listings = JSON.parse(localStorage.getItem("currentListings"));

function search(param) {
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
      
      searchInput.reset();
      window.location.href = "search.html"
      console.log(results)
      localStorage.setItem("searchResults", JSON.stringify(results));
    })
}
function showResults() {
  const searchResults = JSON.parse(localStorage.getItem("searchResults"));
  const numberOfResults = searchResults.length;
  const searchNote = document.querySelector("h1")
  searchNote.innerText = `${numberOfResults} results were found.`;
  showListingsCards(searchResults);
  console.log(numberOfResults)

}
getSearchResults() 
showResults()
 


export {search, getSearchResults, showResults}