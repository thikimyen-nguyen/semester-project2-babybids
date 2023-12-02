export function scrollToListings() {
  const scrollToListings = document.querySelector("#scrollToListings");
scrollToListings.addEventListener("click", function () {
  localStorage.removeItem("searchResults");
  window.location.href = "../index.html#listings"
})
}

