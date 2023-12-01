//  Check if the deadline is less than 3 days, filter listings
export function filterListings(listings) {
  const now = new Date();
  const filteredListings = listings.filter((listing) => {
    // exclude listing with empty media, then filter with deadline < 3 days
    const listingMedia = listing.media;
    if (Array.isArray(listingMedia) && listingMedia.length > 0) {
      const deadlineDate = new Date(listing.endsAt);
      const timeDifferenceInDays = Math.floor(
        (deadlineDate - now) / (24 * 60 * 60 * 1000),
      );

      return timeDifferenceInDays < 3;
    }
  });
  return filteredListings;
}
