import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";
// import axios from "axios";
// import { BlogContext } from "../Context/BlogContext";
// import { Table } from "reactstrap";

// const Comments = () => {
//   const [comments, setHome] = useState([]);
//   const context = useContext(BlogContext);

//   useEffect(() => {
//     axios({
//       url: "http://localhost:3003/showPostComments",
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${context.user?.token}`,
//       },
//     }).then((data) => {
//       setHome(data.data.result);
//     });
//   }, [context.user?.token]);

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
      {/* <div className="background">
        <div className="top-home">
          <div className="top-home-posts">
            <h2>90+</h2>
            <h2>Posts</h2>
            <img src="undraw_Post_re_mtr4.svg" alt="" />
          </div>
          <div className="top-home-pendingposts">
            <h2>20+</h2>
            <h2>Pending Posts</h2>
          </div>
          <div className="top-home-drafts">
            <h2>5</h2>
            <h2>Drafts</h2>
          </div>
          <div className="top-home-scheduledposts">
            <h2>2</h2>
            <h2>Scheduled Posts</h2>
            <img src="undraw_Add_files_re_v09g" alt="" />
          </div>
        </div>

        <div className="middle-home">
          <div className="comments-home">
            <h2>Comments</h2>
            <table className="center">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
              </tr>
              <tr>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
              </tr>
            </table>
            <p>View all</p>
          </div>

          <div className="contactMessages-home">
            <h2>Latest Contact Messages</h2>
            <table className="center">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
              </tr>
              <tr>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
                <td>lorem</td>
              </tr>
            </table>
            <p>View all</p>
          </div>
        </div>

        <div className="bottom-home">
          <h2>Latest Users</h2>
          <div className="bottom-home-users">
            <img src="http://localhost:3002/Images/adminuser.png" alt="" />
            <p>
              Arsh Lakhina
              <br />
              1day ago
            </p>
          </div>
        </div>
      </div> */}

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
            <div className="px-3 pt-2">
              <h4>Latest Comments</h4>
              <hr />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Comment</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Inspiring post</td>
                  <td>Sanchit</td>
                </tr>

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
            <div className="px-3 pt-2">
              <h4>Newer Posts</h4>
              <hr />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
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
