import { updateMedia } from "../profile/media/update.mjs";
import { showUserProfile } from "../profile/user/view.mjs";

// All functions registered user can do once logged in
// 1. A user with a stud.noroff.no email may register
import * as register from "../profile/register/index.mjs";
// 2. A registered user may login
import * as login from "../profile/login/index.mjs";
// 3. A registered user may logout
// 4. A registered user may update their avatar
updateMedia();
// 5. A registered user may view their total credit - show user profile
showUserProfile();
// 6. A registered user may create a Listing with a title, deadline date, media gallery and description
// 7. A registered user may add a Bid to another user’s Listing
// 8. A registered user may view Bids made on a Listing
