import { updateCountdown } from "../data/countdown.mjs";
// All active Listings Card HTML
export function listingCard(listings) {
  
  listings.forEach(listing => {
    const {title, description, endsAt, _count, media, id, updated} = listing;
    // Create card HTML
    const listingsContainer = document.querySelector("#listings-container")
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("col")
    listingsContainer.append(cardContainer);

    const card = document.createElement("div")
    card.classList.add("card", "h-100", "card-hover")
    cardContainer.append(card)

    // relocate single listing by id
    cardContainer.addEventListener("click", function(){
      window.location.href = "../listing/index.html?id=" + id;
    })
    // listing image
    const cardMedia = document.createElement("img");
    cardMedia.classList.add("card-img-top", "img-fluid")
    cardMedia.style.objectFit = "cover"; 
    cardMedia.style.height = "200px"; 
  
    if (media === null || !media) {
      cardMedia.style.display = "none";
    } else {
        cardMedia.src = media[0];
    }
    cardMedia.alt = title;

    //  listing body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    const cardDescription = document.createElement("p");
    cardBody.append(cardTitle, cardDescription)
    cardTitle.classList.add("card-title", "text-secondary", "text-capitalize")
    cardTitle.innerText = title;
    cardDescription.classList.add("card-text")
    cardDescription.innerText = description;
    // listing footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    const endDate = document.createElement("small");
    endDate.innerText = "Ends in: ";
    const endDateValue = document.createElement("span");
    endDateValue.classList.add("text-secondary");
    setInterval(function() {
      endDateValue.innerText = updateCountdown(endsAt);
    }, 1000);
   
    cardFooter.append(endDate, endDateValue);

    //  append all to card
    card.append(cardMedia, cardBody, cardFooter)
  
  });
}