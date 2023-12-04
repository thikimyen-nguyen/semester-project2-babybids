import {postRegisterData} from "./post.mjs";
import { registerURL } from "../auth_API/api.mjs";
import {validateUserName, validateEmail, validatePassword, userName, email, password, emailLogin, loginPassword } from "../data/form-validate.mjs";



const registerForm = document.querySelector("#registerForm");


export function registerAccount() {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateUserName(userName);
    validateEmail(email);
    validatePassword(password);
    
    if (validateUserName(userName) &&  validateEmail(email) && validatePassword(password)) {
     
      const userRegisterInfo = {
          "name": userName.value,
          "email": email.value,
          "password": password.value,
      };
      console.log(userRegisterInfo)
      postRegisterData(registerURL, userRegisterInfo);
      }
     
  })
}

registerAccount() 