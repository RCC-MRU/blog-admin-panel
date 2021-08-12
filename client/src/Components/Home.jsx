import React from "react";
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
  return (
    <React.Fragment>
      {/* <div class="background">
        <div class="top-home">
          <div class="top-home-posts">
            <h2>90+</h2>
            <h2>Posts</h2>
            <img src="undraw_Post_re_mtr4.svg" alt="" />
          </div>
          <div class="top-home-pendingposts">
            <h2>20+</h2>
            <h2>Pending Posts</h2>
          </div>
          <div class="top-home-drafts">
            <h2>5</h2>
            <h2>Drafts</h2>
          </div>
          <div class="top-home-scheduledposts">
            <h2>2</h2>
            <h2>Scheduled Posts</h2>
            <img src="undraw_Add_files_re_v09g" alt="" />
          </div>
        </div>

        <div class="middle-home">
          <div class="comments-home">
            <h2>Comments</h2>
            <table class="center">
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

          <div class="contactMessages-home">
            <h2>Latest Contact Messages</h2>
            <table class="center">
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

        <div class="bottom-home">
          <h2>Latest Users</h2>
          <div class="bottom-home-users">
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
                <h4>90+</h4>
                <h4>Posts</h4>
              </div>
              <div>
                <i class="fa fa-file-o fa-3x"></i>
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
                <i class="fa fa-low-vision fa-3x"></i>
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
                <i class="fa fa-file-text-o fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="home-header-box cont">
            <div className="home-header-content">
              <div>
                <h4>2</h4>
                <h4>Comments</h4>
              </div>
              <div>
                <i class="fa fa-comments-o fa-3x"></i>
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
            <table class="table table-striped">
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
                <tr>
                  <td>2</td>
                  <td>Epitome of Masterpiece</td>
                  <td>Ravi</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nice Article</td>
                  <td>Kunal</td>
                </tr>
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Posts</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Your Mood Depends on The Food</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>A First Timer’s Marathon Training Plan</td>
                  <td>170</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Healthy No-Bake Strawberry Mug Cakes Served</td>
                  <td>150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
