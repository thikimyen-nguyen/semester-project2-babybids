


export function showProfileHTML(user) {
  const {userName, credits, avatar} = user;
  const profileContainer = document.querySelector("#profile-container");

  // user avatar
  const userAvatarContainer = document.createElement("div");
  userAvatarContainer.classList.add("custom-avatar-shape");
  const userAvatar = document.createElement("div");
  userAvatar.classList.add("custom-avatar")
  const avatarImg = document.createElement("img");
  
      if (avatar === null) {
        avatarImg.src = "../../asset/babeebids-logo1.png";
      } else {
        avatarImg.src = avatar;
      }
   
  
 
  avatarImg.alt = userName + "profile avatar";

  userAvatar.append(avatarImg);
  userAvatarContainer.append(userAvatar)

  // user profile
  const userContainer = document.createElement("div");
  userContainer.classList.add("ms-3", "fs-6");
  const currentUserName = document.createElement("p");
  currentUserName.classList.add("text-secondary", "m-0");
  currentUserName.innerText = userName;

  const userCredits = document.createElement("p");
  userCredits.classList.add("text-dark", "m-0");
  const creditValue = document.createElement("span");
  creditValue.classList.add("text-secondary");

  userCredits.innerText = "Credits: ";
  creditValue.innerText = credits;
  userCredits.append(creditValue)
  userContainer.append(currentUserName, userCredits)


  profileContainer.append(userAvatarContainer, userContainer)

}
