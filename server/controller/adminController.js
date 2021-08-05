const express = require("express");
const db = require("../database/db");

//show Author Posts
module.exports = {
  showAuthorPost: async function (req, res) {
    let sql = `Select * FROM blog WHERE userId ='${req.result.userId}'`;

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
    let sql = `SELECT * FROM comments Where userId ='${req.result.userId}'`;

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
  NewPost: async function (req, res) {
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
  DeletePost: async function (req,res) {
 let sql= `DELETE FROM blog WHERE blogId ='${req.params.blogId}'`;

 const query = db.query(sql, (err, result) => {
 if (err) throw err;
 res.status(200).json({
   message: "Post is deleted",
   result: result,
  });
});
console.log(query.sql);
},



//  Show Blog Title 
  BlogTitle: async function (req,res) {
    let sql= ` SELECT blogTitle FROM blog WHERE blogId ='${req.params.blogId}'`;

    const query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        result: result,
       });
     });
     console.log(query.sql);
     },
};
