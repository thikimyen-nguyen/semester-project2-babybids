import { login } from "./post.mjs";
import { loginURL } from "../../auth_API/api.mjs";
import { emailLogin, loginPassword } from "../../data/form-validate.mjs";

const loginForm = document.querySelector("#loginForm");

/**
 * Sets up an event listener for the login form submission to handle user login.
 *
 * @export
 */
export function loginUser() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userLoginInfo = {
      email: emailLogin.value,
      password: loginPassword.value,
    };
    login(loginURL, userLoginInfo);
  });
}
loginUser();
