import { filterListings } from "../data/filteredListings.mjs";
import { updateCountdown } from "../data/countdown.mjs";
// listing card in carousel HTML
export function carouselListing(listings) {
  // filter listings
  const filteredListings = filterListings(listings);
 
  // Create HTML
  filteredListings.forEach((listing, index) => {
    const { title, endsAt, media, id } = listing;
    const carouselContainer = document.querySelector("#carousel-listings");

    const card = document.createElement("div");
    card.classList.add("carousel-item", "card-hover");
    carouselContainer.append(card);
    if (index === 0) {
      card.classList.add("active");
    }
    // relocate single listing by id
    card.addEventListener("click", function () {
      window.location.href = "../listing/index.html?id=" + id;
    });
    // listing image
    const cardMedia = document.createElement("img");
    cardMedia.classList.add("card-img-top", "img-fluid");
    cardMedia.style.objectFit = "cover";
    cardMedia.style.height = "300px";
    cardMedia.src = media[0];
    cardMedia.alt = title;

    //  listing body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "bg-light", "p-0");
    const cardTitle = document.createElement("h5");

    cardTitle.classList.add(
      "card-title",
      "text-secondary",
      "text-capitalize",
      "ps-2",
      "pt-2",
    );
    cardTitle.innerText = title;
    const endDate = document.createElement("p");
    endDate.classList.add("text-end", "pe-2", "pb-2", "m-0");
    endDate.innerText = "Ends in: ";
    const endDateValue = document.createElement("span");
    endDateValue.classList.add("text-secondary");
    setInterval(function () {
      endDateValue.innerText = updateCountdown(endsAt);
    }, 1000);

    endDate.append(endDateValue);
    cardBody.append(cardTitle, endDate);

    //  append all to card
    card.append(cardMedia, cardBody);
  });
}
