import { alertModal } from "../../ui/alert.mjs";

const logoutBtn = document.querySelector("#logoutNav");
export function logout() {
  logoutBtn.addEventListener("click", function () {
    try {
      if (window.location.href.endsWith("/profile.html")) {
        console.log("Redirecting to index.html");
        window.location.href = "../index.html";
      }

      const remove = (key) => localStorage.removeItem(key);
      remove("accessToken");

      alertModal("Success!", "You are logged out successfully!");
    } catch {
      return alertModal("Fail!", "There was a problem logging out");
    }
  });
}
