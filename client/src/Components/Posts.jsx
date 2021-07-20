import React from "react";
import { Table } from "reactstrap";

const Posts = () => {
  return (
    <React.Fragment>
      <div className="container">
        <section className="my-4">
          <section className="table-header-flex">
            <h3>Posts </h3>
            <button className=" postbutton">
            <h5 className="my-2 mx-2">
              <i class="fa fa-plus-circle me-2"></i>
              New Post
            </h5>
            </button>
          </section>
          <Table hover className="table-grid">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
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
