import React, { useState } from "react";
import { Link } from "react-router-dom";
const list = [
  { data: "Posts", link: "/posts" , icon: "fa fa-thumb-tack me-2"},
  { data: "Comments", link: "/comments" , icon: "fa fa-comment me-2 " },
  { data: "Analytics", link: "/analytics"  , icon: "fa fa-signal me-2 "},
];

const LeftPanel = () => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <main className="main-styling">
        <section>
          <h3 className=" fw-bolder">
          <i class="fa fa-tachometer me-2 "></i>
         Dashboard
          </h3>
        </section>

        <section>

        <h4 className="fs-4">
          <i class="fa fa-user-o me-2 "></i>
         Sanchit
          </h4>
          <img
            src={process.env.PUBLIC_URL + "Images/adminuser.png"}
            alt="user profile"
            className="img-fluid user-profile-img"
          />
        </section>

        <button className=" blogbutton">
            <h5 className="my-2 mx-2 fw-bolder">
              <i class="fa fa-book me-2"></i>
              <a href="https://blog-project-react.vercel.app/home" className="bloghome" target="_blank"> View Blog</a>
            </h5>
            </button>

        <section>
          {list.map((detail, index) => (
            <Link
              onClick={() => {
                setValue(index);
              }}
              key={index}
              className={`btn btn-md left-middle-buttons fw-bolder ${
                index === value && `isActive`
              }`}
              activeClassName="isActive"
              to={detail.link}
            >  
               <i className= {detail.icon}></i>
              {detail.data}
            </Link>
          ))}
        </section>
        <section>
          <div className="left-bottom-buttons fs-5 fw-bolder m-2">
            <i className="fa fa-cog fa-lg me-2"></i>Settings
          </div>
          <div className="left-bottom-buttons fs-5 fw-bolder m-2">
            <i className="fa fa-sign-out fa-lg me-2"></i>Logout
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default LeftPanel;
