import { userToken } from "../../auth_API/token.mjs";
import { message, loader } from "../../data/message.mjs";

export async function postBid(url, data) {
  try {
    const postDataOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postDataOption);
    const json = await response.json();
    if (response.ok) {
      alert("Your bid is done!");
      window.location.reload();
      return json;
    } else {
      throw new Error("Could not bid on this item");
    }
  } catch (error) {
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message("error", error);
  }
}
