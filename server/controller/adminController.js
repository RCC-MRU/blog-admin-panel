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

  deletePostComments: async function (req, res) {
    let sql = `SELECT * FROM comments Where commentId ='${req.params.id}'`;
    const query = db.query(sql, (err, result) => {
      if (err) throw err;
      const count = result.length

      if(count == 0){
        res.status(204).json({
          message: "No Such comment found."
        })
      }
      else if(count == 1){
        if(req.result.userId == result[0].userid){
          const del = db.query(`DELETE * FROM comments WHERE commentId ='${req.params.id}'`, (err1, result1) => {
            
            if (err1) throw err1;
            res.status(200).json({
              message: "Comment Deleted.",
            });
          })
        }
        else{
          res.status(203).json({
            message: "Not Authorized"
          })
        }
      }
    });
    console.log(query.sql);
  },
};
