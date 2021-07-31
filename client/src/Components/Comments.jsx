import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const context = useContext(BlogContext);

  useEffect(() => {
    axios({
      url: "http://localhost:3003/showPostComments",
      method: "GET",
      headers: {
        authorization: `Bearer ${context.user?.token}`,
      },
    }).then((data) => {
      setComments(data.data.result);
    });
  }, [context.user?.token]);

  return (
    <React.Fragment>
      <div className="comment">
        <div className="container my-4">
          <div className="top1 ">
            <h1>Comments</h1>
            <div>
              <span className="px-2"> All (80)</span>
              <span className="px-2"> Highlighted (25)</span>
              <span className="px-2"> Liked (10)</span>
            </div>
          </div>
          <hr />
          <div className="comments-table ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Author</th>
                  <th>Post</th>
                  <th>Comment</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {comments.map((item, i) => {
                  return (
                    <tr key={item.blogId}>
                      <td>{i + 1}</td>
                      <td>{item.author}</td>
                      <td>{item.blogId}</td>
                      <td>{item.comment}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comments;
