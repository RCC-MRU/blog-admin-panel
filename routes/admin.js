const express = require("express");
const router = express.Router();
const db = require("../database/db");

const Admin = require("../controller/adminController");

//showAuthorPost

router.get("/authorPost/:userId", Admin.showAuthorPost);

//showPostComments

router.get("/showPostComments/:userId",Admin.showPostComments);

module.exports = router;