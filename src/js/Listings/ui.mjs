// count down time

function updateCountdown(endsAt) {
  const deadlineDate = new Date(endsAt);
  const now = new Date();
  const timeRemaining = deadlineDate - now;

  if (timeRemaining <= 0) {
    return "Ended!";
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (days > 0) {
    return `${days} days ${hours} hours`;
  } else if (hours > 0) {
    return `${hours} hours ${minutes} minutes`;
  } else if (minutes > 0) {
    return `${minutes} minutes ${seconds} seconds`;
  } else {
    return `${seconds} seconds`;
  }
}

//  // Update the countdown every second
//  setInterval(updateCountdown(), 1000);


function listingCard(listings) {
  listings.forEach(listings => {
    const {title, description, endsAt, _count, media, id} = listings;
   
    // Create card HTML
    const listingContainer = document.querySelector("#listings-container")
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("col")
    listingContainer.append(cardContainer);

    const card = document.createElement("div")
    card.classList.add("card", "h-100")
    cardContainer.append(card)
    // listing image
    const cardMedia = document.createElement("img");
    cardMedia.classList.add("card-img-top", "img-fluid")
    cardMedia.style.objectFit = "cover"; 
    cardMedia.style.height = "200px"; 
  
    if (media === null || !media) {
      cardMedia.style.display = "none";
    } else {
        cardMedia.src = media[0];
    }
    cardMedia.alt = title;

    //  listing body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    const cardDescription = document.createElement("p");
    cardBody.append(cardTitle, cardDescription)
    cardTitle.classList.add("card-title", "text-secondary")
    cardTitle.innerText = title;
    cardDescription.classList.add("card-text")
    cardDescription.innerText = description;
    // listing footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    const endDate = document.createElement("small");
    endDate.innerText = "Ends in: ";
    const endDateValue = document.createElement("span");
    endDateValue.classList.add("text-secondary");
    setInterval(function() {
      endDateValue.innerText = updateCountdown(endsAt);
    }, 1000);
   
    cardFooter.append(endDate, endDateValue);

    //  append all to card
    card.append(cardMedia, cardBody, cardFooter)
  
  });
}

export {listingCard}