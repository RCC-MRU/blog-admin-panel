const express = require("express");
const router = express.Router();
const db = require("../database/db");

const Admin = require("../controller/adminController");

//showAuthorPost
router.route("/authorPost/:userId").get(Admin.showAuthorPost);

//showPostComments
router.route("/showPostComments/:userId").get(Admin.showPostComments);

module.exports = router;
