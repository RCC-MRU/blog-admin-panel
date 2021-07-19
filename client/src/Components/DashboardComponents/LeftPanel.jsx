import React, { useState } from "react";
import { Link } from "react-router-dom";
const list = [
  { data: "Posts", link: "/posts" },
  { data: "Comments", link: "/comments" },
  { data: "Analytics", link: "/analytics" },
];

const LeftPanel = () => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <main className="main-styling">
        <section>
          <h4>Sanchit</h4>
        </section>
        <section>
          <img
            src={process.env.PUBLIC_URL + "Images/sample.png"}
            alt="user profile"
            className="img-fluid user-profile-img"
          />
        </section>
        <section>
          {list.map((detail, index) => (
            <Link
              onClick={() => {
                setValue(index);
              }}
              key={index}
              className={`btn btn-md left-middle-buttons ${
                index === value && `isActive`
              }`}
              activeClassName="isActive"
              to={detail.link}
            >
              {detail.data}
            </Link>
          ))}
        </section>
        <section>
          <div className="left-bottom-buttons">
            <i className="fa fa-cog fa-lg"></i>Settings
          </div>
          <div className="left-bottom-buttons">
            <i className="fa fa-sign-out fa-lg"></i>Logout
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default LeftPanel;
