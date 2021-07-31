import React, { useEffect, useState, useContext } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";
// import { showAuthorPost } from "../Util/axios";

// const num = 1;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const context = useContext(BlogContext);

  useEffect(() => {
    axios({
      url: "http://localhost:3003/posts",
      method: "GET",
      headers: {
        authorization: `Bearer ${context.user?.token}`,
      },
    }).then((data) => {
      setPosts(data.data.result);
      // console.log(data.data.result);
    });
  }, [context.user?.token]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <header className="table-header-flex">
          <h3>Posts</h3>
          <button className=" postbutton">
            <h5 className="my-2 mx-2">
              <i className="fa fa-plus-circle me-2"></i>&nbsp;New Post
            </h5>
          </button>
        </header>
        <section style={{ overflowX: "hidden" }}>
          <Table hover className="table-grid table-light">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* {posts.blogs &&
                posts.blogs.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.title}</td>
                    <td>{item.title}</td>
                  </tr>
                ))} */}
              {posts.map((item, i) => {
                return (
                  <React.Fragment key={item.blogId}>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.blogTitle}</td>
                      <td>{item.userId}</td>
                      <td>{item.category}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </Table>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Posts;

// {
//   /* TODO: Use of icon instead of image */
// }
