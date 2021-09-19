import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
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
      <div className="row my-3">
        <div className="col-md-6 col-lg-3 my-3">
          <div className="home-header-box cont">
            <div className="home-header-content">
              <div>
                <h4>{posts.length}</h4>
                <h4>Posts</h4>
              </div>
              <div>
                <i className="fa fa-file-o fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="home-header-box cont">
            <div className="home-header-content">
              <div>
                <h4>20+</h4>
                <h4>Pending Posts</h4>
              </div>
              <div>
                <i className="fa fa-low-vision fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="home-header-box cont">
            <div className="home-header-content">
              <div>
                <h4>5</h4>
                <h4>Drafts</h4>
              </div>
              <div>
                <i className="fa fa-file-text-o fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="home-header-box cont">
            <div className="home-header-content">
              <div>
                <h4>{comments.length}</h4>
                <h4>Comments</h4>
              </div>
              <div>
                <i className="fa fa-comments-o fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 my-2">
          <div className="home-table-box cont">
            <Link to="/comments" className="Link-highlight">
              <div className="p-3">
                <h4>Comments you've got</h4>
              </div>
            </Link>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Comment</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((item, i) => {
                  return (
                    <React.Fragment key={item.blogId}>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.comment}</td>
                        <td>{item.author}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="home-table-box cont">
            <Link to="/posts" className="Link-highlight">
              <div className="p-3">
                <h4>Published Posts</h4>
              </div>
            </Link>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Posts</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((item, i) => {
                  return (
                    <React.Fragment key={item.blogId}>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.blogTitle}</td>
                        <td>{item.viewCounter}</td>
                      </tr>
                    </React.Fragment>
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

export default Home;
