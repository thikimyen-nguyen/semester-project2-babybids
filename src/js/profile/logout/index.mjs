import { alertModal } from "../../ui/alert.mjs";

const logoutBtn = document.querySelector("#logoutNav");
/**
 * Sets up an event listener for the logout button click to handle user logout.
 * @export
 */
export function logout() {
  logoutBtn.addEventListener("click", function (event) {
    try {
      event.preventDefault();
      // if (window.location.href.endsWith("/profile.html")) {
      //   window.location.href = "../index.html";
      // }
      window.location.href = "../index.html";

      const remove = (key) => localStorage.removeItem(key);
      remove("accessToken");

      alertModal("Success!", "You are logged out successfully!");
    } catch {
      return alertModal("Fail!", "There was a problem logging out");
    }
  });
}
