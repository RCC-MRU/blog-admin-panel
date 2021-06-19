import React from "react";
import { Link } from "react-router-dom";

const LeftPanel = ({ activeTab, setActiveTab }) => {
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
          <Link
            type="button"
            className="btn btn-md left-middle-buttons"
            onClick={() => toggle("1")}
          >
            Posts
          </Link>
          <Link
            type="button"
            className="btn btn-md left-middle-buttons"
            onClick={() => toggle("2")}
          >
            Comments
          </Link>
          <Link
            type="button"
            className="btn btn-md left-middle-buttons"
            onClick={() => toggle("3")}
          >
            Analytics
          </Link>
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
