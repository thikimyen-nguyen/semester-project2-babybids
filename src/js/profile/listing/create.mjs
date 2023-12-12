import { userToken } from "../../auth_API/token.mjs";
import { alertModal } from "../../ui/alert.mjs";

// post data to register Account
export async function create(url, data) {
  const postOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, postOption);
  const json = await response.json();
  console.log(json);
  if (response.ok) {
    alertModal("Success!", "Your listing was created successfully!");
  } else {
    throw new Error("Could not create listing.Please try again!");
  }

  return json;
}
