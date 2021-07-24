import React from "react";
import { Table } from "reactstrap";

const Posts = () => {
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
              <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">16</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">17</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">18</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">19</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">20</th>
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
