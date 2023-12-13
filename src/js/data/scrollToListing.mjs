/**
 *
 * Attaches a click event listener to the element with the id "scrollToListings."
 * Removes the "searchResults" item from localStorage and navigates to the listings section on the index page.
 * @export
 */
export function scrollToListings() {
  const scrollToListings = document.querySelector("#scrollToListings");
  scrollToListings.addEventListener("click", function () {
    localStorage.removeItem("searchResults");
    window.location.href = "../index.html#listings";
  });
}
