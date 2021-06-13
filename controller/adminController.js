const express = require("express");
const db =require ("../database/db");

//show Author Posts
module.exports= {
    showAuthorPost: async function (req,res) {
        let sql =`Select * FROM blog WHERE userId ='${req.params.userId}'`;
      
        const query=db.query(sql,(err,result)=>{
            if (err) throw err;
            res.status(200).json({
                message:"All your posts are displayed",
                result: result,
            });
        });
      console.log(query.sql);
      },



      
//show comments on author post
showPostComments : async function (req,res) {
    let sql=`SELECT * FROM comments Where userId ='${req.params.userId}'`;
  
    const query=db.query(sql,(err,result)=>{
      if (err) throw err;
      res.status(200).json({
        message:"Comments on post are displayed",
        result: result,
      });
    });
      console.log(query.sql);
  },
  };
  