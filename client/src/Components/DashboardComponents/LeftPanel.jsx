import React, { useState } from "react";
import { Link } from "react-router-dom";
const list = [
  { data: "Posts", link: "/posts", icon: "fa fa-thumb-tack me-2" },
  { data: "Comments", link: "/comments", icon: "fa fa-comment me-2 " },
  { data: "Analytics", link: "/analytics", icon: "fa fa-signal me-2 " },
];

const LeftPanel = () => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <main className="main-styling">
        <section>
          <h4 className="font-weight-bolder">
            <i className="fa fa-tachometer"></i>&nbsp;Dashboard
          </h4>
        </section>

        <section
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <figure>
            <img
              src={process.env.PUBLIC_URL + "Images/adminuser.png"}
              alt="user profile"
              className="img-fluid user-profile-img"
            />
          </figure>
          <h4 className="my-2">
            <i className="fa fa-user-o"></i>&nbsp;Sanchit
          </h4>
          <a
            href="https://blog-project-react.vercel.app/home"
            rel="noreferrer"
            className="btn blogbutton font-weight-bolder my-2"
            target="_blank"
            type="button"
          >
            <i className="fa fa-book me-2"></i>&nbsp;View Blog
          </a>
        </section>

        <section>
          {list.map((detail, index) => (
            <Link
              onClick={() => {
                setValue(index);
              }}
              key={index}
              className={`btn blogbutton font-weight-bolder my-2 ${
                index === value && `isActive`
              }`}
              // activeClassName="isActive"
              to={detail.link}
            >
              <i className={detail.icon}></i>
              {detail.data}
            </Link>
          ))}
        </section>
        <section>
          <div className="left-bottom-buttons fs-5 font-weight-bolder m-2">
            <i className="fa fa-cog fa-lg me-2"></i> Settings
          </div>
          <div className="left-bottom-buttons fs-5 font-weight-bolder m-2">
            <i className="fa fa-sign-out fa-lg me-2"></i> Logout
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default LeftPanel;
