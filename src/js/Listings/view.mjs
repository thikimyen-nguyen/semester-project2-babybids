import {getListings} from "./get.mjs";
import { allListingsURL } from "../auth_API/api.mjs";
import {updateCountdown} from "./ui.mjs";

async function showListings(url) {
  const listings = await getListings(url);
  localStorage.setItem("currentListings", JSON.stringify(listings));
  console.log (listings);
  listingCard(listings);
  
}

showListings(allListingsURL);

function listingCard(listings) {
  listings.forEach(listings => {
    const {title, description, endsAt, _count, media, id} = listings;
    console.log (media);
    // Create card HTML
    const listingContainer = document.querySelector("#listings-container")
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("col")
    listingContainer.append(cardContainer);

    const card = document.createElement("div")
    card.classList.add("card", "h-100")
    cardContainer.append(card)
    // listing image
    const cardMedia = document.createElement("img");
    cardMedia.classList.add("card-img-top")
  
    if (media === null || !media) {
      cardMedia.style.display = "none";
    } else {
        cardMedia.src = media[0];
    }
    cardMedia.alt = "listing image";

    //  listing body
    const cardBody = document.createElement("div")

    //  append all to card
    card.append(cardMedia, cardBody)
  
  });
}
