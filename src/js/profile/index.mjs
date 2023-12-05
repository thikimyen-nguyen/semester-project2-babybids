import * as register from "../profile/register/index.mjs";
import * as login from "../profile/login/index.mjs";

import { updateMedia } from "../profile/media/update.mjs";
import { showUserProfile } from "../profile/credits/view.mjs";

// All functions once registered user logged in
// 1. A user with a stud.noroff.no email may register
// 2. A registered user may login
// 3. A registered user may logout
// 4. A registered user may update their avatar
updateMedia();
// 5. A registered user may view their total credit - show user profile
showUserProfile();
// 6. A registered user may create a Listing with a title, deadline date, media gallery and description
// 7. A registered user may add a Bid to another user’s Listing
// 8. A registered user may view Bids made on a Listing

