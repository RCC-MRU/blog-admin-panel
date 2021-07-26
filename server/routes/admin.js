const express = require("express");
const router = express.Router();

const Admin = require("../controller/adminController");

//showAuthorPost
router.route("/authorPost/:userId").get(Admin.showAuthorPost);

//showPostComments
router.route("/showPostComments/:userId").get(Admin.showPostComments);

//newPostCreated
router.route("/Newpost").post(Admin.NewPost);

module.exports = router;
