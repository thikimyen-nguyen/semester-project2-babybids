import { message } from "../../data/message.mjs";
import { alertModal } from "../../ui/alert.mjs";

async function login(url, data) {
  try {
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postOption);
    const json = await response.json();
    const { accessToken, name, avatar, credits } = json;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("currentUser", name);
    // localStorage.setItem("avatar", avatar);
    // localStorage.setItem("credits", credits);
    console.log(json);

    if (response.ok) {
      alertModal("Success!", "You are logged In!");
    } else {
      throw new Error("Please log in again with correct email or password");
    }
    return json;
  } catch (error) {
    const loader = document.querySelector(".modalLoader");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message(error);
  }
}

export { login };
