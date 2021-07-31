import React from "react";

const Comments = () => {
  return (
    <React.Fragment>
      <div className="comment">
        <div className="container my-4">
          <div className="top1 ">
            <h1>Comments</h1>
            <div>
              <span className="px-2"> All (80)</span>
              <span className="px-2"> Highlightd (25)</span>
              <span className="px-2"> Liked (10)</span>
            </div>
          </div>
          <hr />
          <div className="bottom1">
            <table style={{ width: "100%" }}>
              <tr>
                <th>Author</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="author">Author</li>
                  </ul>
                  author@gmail.com
                  <br />
                  198.5468.24648.378
                </td>
                <td>
                  Hii ,
                  <br />
                  comment written by author.
                  <br />
                  <br />
                  Reply | ignore | unapproven | Spam | Trash
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="author">Author</li>
                  </ul>
                  author@gmail.com
                  <br />
                  198.5468.24648.378
                </td>
                <td>
                  Hii ,
                  <br />
                  comment written by author.
                  <br />
                  <br />
                  Reply | ignore | unapproven | Spam | Trash
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comments;
