import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import axios from "axios";

const Posts = () => {

  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

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


              {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.title}</td>
                <td>{item.title}</td>
              </tr>
            ))}


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
