import React,{useState,useEffect,useContext} from "react";
import axios from "axios";
import { BlogContext } from "../Context/BlogContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const context = useContext(BlogContext);

  useEffect(() => {
    axios({
      url: "http://localhost:3003/comments",
      method: "GET",
      headers: {
        authorization: `Bearer ${context.user?.token}`,
      },
    }).then((data) => {
      setComments(data.data.result);
      console.log(data.data.result);
    });
  }, [context.user?.token]);

  return (
    <React.Fragment>
      <div className="comment">
        <div className="container my-4">
          <div clasName="top1 ">
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
        <th>Id</th>
        <th>Username</th>
        <th>Comment</th>
        <th>Post</th>
        <th>Date</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>ebfejcdqe</td>
        <td>Nice post</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa sapiente quibusdam laborum omnis minus enim obcaecati atque, modi reiciendis, tempora a quaerat inventore error deleniti excepturi tempore velit animi.</td>
        <td>31july,2021</td>
      </tr>
      <tr>
      <td>2</td>
        <td>bwecnjfkj</td>
        <td>Nice post</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa sapiente quibusdam laborum omnis minus enim obcaecati atque, modi reiciendis, tempora a quaerat inventore error deleniti excepturi tempore velit animi.</td>
        <td>31july,2021</td>
      </tr>
      <tr>
        <td>1</td>
        <td>ebfejcweb</td>
        <td>Nice post</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa sapiente quibusdam laborum omnis minus enim obcaecati atque, modi reiciendis, tempora a quaerat inventore error deleniti excepturi tempore velit animi.</td>
        <td>31july,2021</td>
      </tr>
      <tr>
        <td>1</td>
        <td>ebfejcjhbe</td>
        <td>Nice post</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa sapiente quibusdam laborum omnis minus enim obcaecati atque, modi reiciendis, tempora a quaerat inventore error deleniti excepturi tempore velit animi.</td>
        <td>31july,2021</td>
      </tr>
      {/* {comments.map((item, i) => {
                return (
                  <tr key={item.blogId}>
                    <td>{i + 1}</td>
                    <td>{item.userId}</td>
                    <td>{item.blogId}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  </tr>
                );
              })} */}
      </tbody>
    </table>
    </div>
    </div>
  </div>



    </React.Fragment>
  );
};

export default Comments;
