import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";
import { Table } from "reactstrap";

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
      <div className="container-fluid">
        <header className="table-header-flex">
          <h3>Comments</h3>

          <div>
            <span className="px-2"> All (80)</span>
            <span className="px-2"> Highlighted (25)</span>
            <span className="px-2"> Liked (10)</span>
          </div>
        </header>

        <section style={{ overflowX: "hidden" }}>
          <Table hover className="table table-striped table-grid">
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Author</th>
                <th>Post</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Options</th>
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
                    <td>
                      <i className="fa fa-eye btn option-btn font-weight-bolder mx-1"></i>
                      <i className="fa fa-pencil btn option-btn font-weight-bolder mx-1"></i>
                      <i className="fa fa-trash-o btn option-btn font-weight-bolder mx-1"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Comments;
