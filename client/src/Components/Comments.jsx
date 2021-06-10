import React from "react";

const Comments = () => {
  return(
  <React.Fragment>
  <h1 className="text-info">Comments</h1>;
  <div className="container">
      <div class="top">
          <h1>Comments</h1>
          <p>
              All<span>(80)</span>|Highlighted<span>(25)</span>|Liked<span>(10)</span>
          </p>
      </div>
      <hr/>
      <div className="bottom">
          <table style="width: 100%">
              <tr>
                  <th>Author</th>
                  <th>Comment</th>
              </tr>
              <tr>
                  <td>
                      <ul>
                          <li>Author</li>
                      </ul>
                      author@gmail.com
                      <br/>
                      198.5468.24648.378
                  </td>
                  <td>
                      Hii ,
                      <br/>
                      comment written by author.
                      <br/><br/>
                      Reply | ignore | unapproven | Spam | Trash
                  </td>
              </tr>
              <tr>
                  <td>
                      <ul>
                          <li>Author</li>
                      </ul>
                      author@gmail.com
                      <br/>
                      198.5468.24648.378
                  </td>
                  <td>
                      Hii ,
                      <br/>
                      comment written by author.
                      <br/><br/>
                      Reply | ignore | unapproven | Spam | Trash
                  </td>
              </tr>
          </table>
      </div>
  </div>
  </React.Fragment>
  );
}

export default Comments;
