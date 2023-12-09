import { profileURL } from "../../auth_API/api.mjs";
import {
  currentUserName,
  getCurrentUserListings,
} from "../../profile/user/get.mjs";

import { showListingsCards } from "../../ui/listings.mjs";
import { loader, message } from "../../data/message.mjs";
const currentUserListingsURL = profileURL + `/${currentUserName}/listings`;
const profileListings = document.querySelector(".profileListings");

export async function showUserListings() {
  if (profileListings) {
    loader.innerHTML = "";
    try {
      localStorage.removeItem("currentUserListings");
      const listings = await getCurrentUserListings(currentUserListingsURL);
      localStorage.setItem("currentUserListings", JSON.stringify(listings));
      showListingsCards(listings);
    } catch (error) {
      const pageContent = document.querySelector(".content");
      if (pageContent) {
        pageContent.classList.add("d-none");
      }
      loader.classList.add("bg-light");
      loader.innerHTML = message("error", error);
    }
  }
}
