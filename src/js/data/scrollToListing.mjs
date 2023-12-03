export function scrollToListings() {
  const scrollToListings = document.querySelector("#scrollToListings");
  scrollToListings.addEventListener("click", function () {
    localStorage.removeItem("searchResults");
    // localStorage.clear();

    window.location.href = "../index.html#listings";
  });
}
