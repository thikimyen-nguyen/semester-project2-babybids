import { register } from "./post.mjs";
import { registerURL } from "../../auth_API/api.mjs";
import {
  validateUserName,
  validateEmail,
  validatePassword,
  userName,
  email,
  password,
} from "../../data/form-validate.mjs";

const registerForm = document.querySelector("#registerForm");

/**
 * Sets up an event listener for the registration form submission to register a new account.
 *
 * @export
 */
export function registerAccount() {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateUserName(userName);
    validateEmail(email);
    validatePassword(password);

    if (
      validateUserName(userName) &&
      validateEmail(email) &&
      validatePassword(password)
    ) {
      const userRegisterInfo = {
        name: userName.value,
        email: email.value,
        password: password.value,
      };
      console.log(userRegisterInfo);
      register(registerURL, userRegisterInfo);
    }
  });
}

registerAccount();
