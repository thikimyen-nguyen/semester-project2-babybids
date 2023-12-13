import { createListingURL } from "../../auth_API/api.mjs";
import { create } from "./create.mjs";
import { message } from "../../data/message.mjs";

const createListingForm = document.querySelector("#createListingForm");

createListingForm.addEventListener("submit", function createNewListing(event) {
  try {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // Convert the tags and image link value to an array
    const tags = formData.get("tags");
    const tagsArray = tags.split(",").map((tag) => tag.trim());
    if (!tagsArray.includes("babee")) {
      tagsArray.push("babee");
    }
    const media = formData.get("media");
    const mediaArray = media.split(",").map((image) => image.trim());
    // End Date
    const endDate = formData.get("date");
    const formattedDate = new Date(endDate).toISOString();

    const listing = Object.fromEntries(formData.entries());
    listing.tags = tagsArray;
    listing.media = mediaArray;
    listing.endsAt = formattedDate;
    create(createListingURL, listing);
  } catch (error) {
    const loader = document.querySelector(".createListingNote");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
});
