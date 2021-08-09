const express = require("express");
const db = require("../database/db");

//show Author Posts
module.exports = {
  showAuthorPost: async function (req, res) {
    let sql = `Select * FROM blog WHERE userId ='${req.result.userId}' AND visibility = '1'`;

    const query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        message: "All your posts are displayed",
        result: result,
      });
    });
    console.log(query.sql);
  },

  //show comments on author post
  showPostComments: async function (req, res) {
    let sql = `SELECT C.commentId, C.author, B.blogTitle, C.comment, C.createdAt FROM blog B INNER JOIN comments C WHERE B.blogId = C.blogId AND C.userId='${req.result.userId}' AND C.visibility='1'`;

    const query = db.query(sql, (err, result) => {
      if (err) throw err;

      res.status(200).json({
        message: "Comments on post are displayed",
        result: result,
      });
    });
    console.log(query.sql);
  },

  //Create new post
  newPost: async function (req, res) {
    let CreatePost = req.body;
    let sql = `INSERT INTO blog SET ?`;

    const query = db.query(sql, CreatePost, (err, results) => {
      if (err) throw err;
      res.status(200).json({
        message: "New Post created",
        result: results,
      });
    });
    console.log(query.sql);
  },

  // Delete the post
  deletePost: async function (req, res) {
    // let sql = `DELETE FROM blog WHERE blogId ='${req.params.blogId}'`;
    let sql = `UPDATE blog SET visibility = 0 WHERE blogId='${req.params.blogId}'`;

    const query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        message: "Post deleted",
        result: result,
      });
    });
    console.log(query.sql);
  },

  // Delete the post
  deleteComment: async function (req, res) {
    // let sql = `DELETE FROM blog WHERE blogId ='${req.params.blogId}'`;
    let sql = `UPDATE comments SET visibility = 0 WHERE commentId='${req.params.commentId}'`;

    const query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        message: "Comment deleted",
        result: result,
      });
    });
    console.log(query.sql);
  },
};
