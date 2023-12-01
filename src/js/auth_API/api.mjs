const baseApi = "https://api.noroff.dev/api/v1";
const listingsEndpoint = "/auction/listings?_active=true";
const allListingsURL = baseApi + listingsEndpoint;
const singleListingEndpoint = "/auction/listings";
const sellerPara = "_seller=true";
const bidsPara = "_bids=true";

// get id post and create single post id
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
// url to fetch
const singleListingURL =
  baseApi +
  singleListingEndpoint +
  "/" +
  id +
  "?" +
  bidsPara +
  "&" +
  sellerPara;
export { allListingsURL, singleListingURL };
