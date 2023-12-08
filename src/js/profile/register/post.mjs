import { message } from "../../data/message.mjs";

// post data to register Account
async function register(url, data) {
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
    console.log(json);
    if (response.ok) {
      alert("Your account was registered successfully! You can now Log In");
    } else {
      throw new Error(
        "Could not create account. It may be existed. You can try login or create new account",
      );
    }

    return json;
  } catch (error) {
    const loader = document.querySelector(".modalLoader");
    loader.classList.add("text-secondary", "bg-light");
    loader.innerHTML = message("error", error);
  }
}

export { register };
