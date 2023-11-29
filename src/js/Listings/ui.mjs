// countdown time for deadline

function updateCountdown(date) {
  const deadlineDate = new Date(date);
  const now = new Date();
  const timeRemaining = deadlineDate - now;

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


// All active Listings Card HTML
function listingCard(listings) {
  
  listings.forEach(listing => {
    const {title, description, endsAt, _count, media, id, updated} = listing;
    // Create card HTML
    const listingsContainer = document.querySelector("#listings-container")
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("col")
    listingsContainer.append(cardContainer);

    const card = document.createElement("div")
    card.classList.add("card", "h-100")
    cardContainer.append(card)

    // relocate single listing by id
    cardContainer.addEventListener("click", function(){
      window.location.href = "../listing/index.html?id=" + id;
    })
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
    cardTitle.classList.add("card-title", "text-secondary", "text-capitalize")
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
// carousel Card HTML
//  Check if the deadline is less than 3 days, filter listings
function filterListings(listings) {
  const now = new Date();
  const filteredListings = listings.filter(listing => {
    // exclude listing with empty media, then filter with deadline < 3 days
    const listingMedia = listing.media;
    if (Array.isArray(listingMedia) && listingMedia.length > 0) {
      const deadlineDate = new Date(listing.endsAt);
      const timeDifferenceInDays = Math.floor((deadlineDate - now) / (24 * 60 * 60 * 1000));

      return timeDifferenceInDays < 3;
    }
    
  });
  return filteredListings;
}

// listing card in carousel
function carouselListing(listings) {
  // filter listings
  const filteredListings = filterListings(listings);
  console.log(filteredListings);
  // Create HTML
  filteredListings.forEach((listing, index) => {
    const {title, endsAt, _count, media, id} = listing;
    console.log(media);
    const carouselContainer = document.querySelector("#carousel-listings");

    const card = document.createElement("div")
    card.classList.add("carousel-item")
    carouselContainer.append(card)
    if (index === 0) {
      card.classList.add("active")
    }
    // relocate single listing by id
    card.addEventListener("click", function(){
      window.location.href = "../listing/index.html?id=" + id;
    })
    // listing image
    const cardMedia = document.createElement("img");
    cardMedia.classList.add("card-img-top", "img-fluid")
    cardMedia.style.objectFit = "cover"; 
    cardMedia.style.height = "200px"; 
    cardMedia.src = media[0];
    cardMedia.alt = title;

    //  listing body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    const cardTitle = document.createElement("h5");
    
    cardTitle.classList.add("card-title", "text-secondary", "text-capitalize")
    cardTitle.innerText = title;
    
    
    // listing footer
    
    const endDate = document.createElement("small");
    endDate.innerText = "Ends in: ";
    const endDateValue = document.createElement("span");
    endDateValue.classList.add("text-secondary");
    setInterval(function() {
      endDateValue.innerText = updateCountdown(endsAt);
    }, 1000);
   
    endDate.append(endDateValue)
    cardBody.append(cardTitle, endDate)

    //  append all to card
    card.append(cardMedia, cardBody)

});
}


export {listingCard, carouselListing}