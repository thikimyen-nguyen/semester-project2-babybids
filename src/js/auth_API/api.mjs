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

  const registerEndpoint = "/auction/auth/register";
  const registerURL = baseApi + registerEndpoint;

  const loginEndpoint = "/auction/auth/login";
  const loginURL = baseApi + loginEndpoint;

  const profileEndpoint = "/auction/profiles";
  const profileURL = baseApi + profileEndpoint
export { allListingsURL, singleListingURL, registerURL, loginURL, profileURL };
