import { updateCountdown } from "../data/countdown.mjs";
import { getMaxAmount } from "../data/bids.mjs";
import {
  setAttributes,
  bidAttributes,
  bidBtnAttributes,
  loginAttributes,
} from "../data/setAttributes.mjs";
import { createTable } from "./table.mjs";
import { userToken } from "../auth_API/token.mjs";
import { postBid } from "../profile/bid/index.mjs";
import { bidURL } from "../auth_API/api.mjs";
// single listing detail HTML

export function singleListingCard(listing) {
  const { title, description, endsAt, media, bids } = listing;
  const pageTitle = document.querySelector("title");
  pageTitle.innerText = title;

  const listingContainer = document.querySelector("#single-listing-container");
  const card = document.createElement("div");
  card.classList.add("row", "g-0");

  // card Image
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("col-md-5");
  const cardImage = document.createElement("img");
  cardImage.classList.add("img-fluid", "rounded-start");
  imageContainer.append(cardImage);

  cardImage.src = media[0];
  cardImage.alt = title;
  // Card body
  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("col-md-7");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h1");
  cardTitle.classList.add(
    "card-title",
    "text-secondary",
    "text-capitalize",
    "fw-bolder",
    "mb-4",
  );
  cardTitle.innerText = title;

  // listing ending date
  const endDateContainer = document.createElement("div");
  endDateContainer.classList.add("d-flex", "flex-row");
  const endDate = document.createElement("p");
  endDate.classList.add("card-text", "text-secondary", "fs-4");
  endDate.innerText = "Ends in: ";
  const endDateValue = document.createElement("p");
  endDateValue.classList.add("card-text", "fs-4", "ms-5");
  endDateValue.innerText = updateCountdown(endsAt);

  endDateContainer.append(endDate, endDateValue);
  // listing highest Bid value shown
  const highestBidContainer = document.createElement("div");
  highestBidContainer.classList.add("d-flex", "flex-row");
  const highestBid = document.createElement("p");
  highestBid.classList.add("card-text", "text-secondary", "fs-4");
  highestBid.innerText = "Current Highest Bid: ";
  const highestBidValue = document.createElement("p");
  highestBidValue.classList.add("card-text", "fs-4", "ms-5");
  highestBidValue.innerText = getMaxAmount(bids);
  const currencyContainer = document.createElement("span");
  currencyContainer.classList.add("ms-3", "fs-4");
  currencyContainer.innerText = "NOK";

  highestBidContainer.append(highestBid, highestBidValue, currencyContainer);

  // Bid form
  const bidFormContainer = document.createElement("form");
  bidFormContainer.classList.add("d-flex", "flex-row", "bidForm");
  const bidLabel = document.createElement("label");
  bidLabel.setAttribute("for", "bid");
  // Bid input form
  const bidInput = document.createElement("input");
  bidInput.classList.add("form-control", "bidInput");
  setAttributes(bidInput, bidAttributes);

  const bidBtn = document.createElement("button");
  bidBtn.classList.add("btn", "btn-primary", "ms-1");
  bidBtn.innerText = "Bid";
  setAttributes(bidBtn, bidBtnAttributes);
  bidBtn.disabled = true;
  // bid function
  bidFormContainer.addEventListener("submit", function (event) {
    event.preventDefault();
    if (bidInput.value > getMaxAmount(bids)) {
      const bidValue = {
        amount: parseFloat(bidInput.value) || 0,
      };
      console.log(bidValue);
      postBid(bidURL, bidValue);
    } else {
      alert("Your bid must be greater than current highest bid");
    }
  });

  // note to log in
  const bidNote = document.createElement("p");
  bidNote.classList.add("text-secondary", "text-center", "mt-2");
  const noteLoginBtn = document.createElement("button");
  noteLoginBtn.classList.add(
    "btn",
    "btn-link",
    "text-secondary",
    "ps-2",
    "pe-2",
  );

  setAttributes(noteLoginBtn, loginAttributes);
  noteLoginBtn.innerText = "Log In";

  bidNote.append("Please", noteLoginBtn, "to Bid");
  bidFormContainer.append(bidLabel, bidInput, bidBtn);

  // Listing Description
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("mt-5");
  const descriptionTitle = document.createElement("p");
  descriptionTitle.classList.add("card-text", "text-secondary", "fs-4");
  descriptionTitle.innerText = "Description";
  const descriptionContent = document.createElement("p");
  descriptionContent.classList.add("card-text");
  descriptionContent.innerText = description;
  descriptionContainer.append(descriptionTitle, descriptionContent);

  // Bid History - only viewwd by logged in user
  const historyContainer = document.createElement("div");
  historyContainer.classList.add("mt-5", "d-none");

  const historyTitle = document.createElement("p");
  historyTitle.classList.add("card-text", "text-secondary", "fs-4");
  historyTitle.innerText = "Bid History";
  // history table content
  const newBidsArray = bids.map(function (obj) {
    const newObj = {
      username: obj.bidderName,
      bid: obj.amount,
      date: obj.created,
    };
    return newObj;
  });

  const historyTable = createTable(newBidsArray);

  historyContainer.append(historyTitle, historyTable);

  //  all append
  cardBody.append(
    cardTitle,
    endDateContainer,
    highestBidContainer,
    bidFormContainer,
    bidNote,
  );
  cardBodyContainer.append(cardBody);
  card.append(imageContainer, cardBodyContainer);
  listingContainer.append(card, descriptionContainer, historyContainer);

  // if logged in user
  const expiredListing = updateCountdown(endsAt);

  if (userToken) {
    historyContainer.classList.remove("d-none");
    bidNote.classList.add("d-none");
    bidBtn.disabled = false;
  }
  if (userToken && expiredListing === "Expired!") {
    bidBtn.disabled = true;
  }
}
