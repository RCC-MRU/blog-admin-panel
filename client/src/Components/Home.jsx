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
    <div class="background">
    <div class="top-home">
      <div class="top-home-posts">
        <h2>90+</h2>
        <h2>Posts</h2>
        <img src="undraw_Post_re_mtr4.svg" alt=""/>
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
        <img src="undraw_Add_files_re_v09g" alt=""/>
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
      <img src="http://localhost:3002/Images/adminuser.png" alt=""/>
      <p>Arsh Lakhina
        <br/>1day ago
      </p>
      </div>
    </div>
    </div>

    </React.Fragment>
  );
};

export default Home;
