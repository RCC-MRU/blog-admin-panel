const express = require("express");
const router = express.Router();

const Admin = require("../controller/adminController");

const middlewares = require("../middleware/token");

//showAuthorPost
router.get("/posts", middlewares.jwtVerification, Admin.showAuthorPost);

//showPostComments
router.get("/showPostComments", middlewares.jwtVerification, Admin.showPostComments);

//newPostCreated
router.post("/newpost", middlewares.jwtVerification, Admin.NewPost);

//DeletePost
router.delete("/DeletePost/:blogId", Admin.DeletePost);

// Show Blog Title using BlogId
router.get("/BlogTitle/:blogId", Admin.BlogTitle);

module.exports = router;
