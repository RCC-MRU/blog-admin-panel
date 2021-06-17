import React from "react";
import LeftPanel from "./DashboardComponents/LeftPanel";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="border-shadow-box">
          <div className="row ">
            <div className="col-md-3">
              <LeftPanel />
              <div className="adminPanel">
              <div className="left col-lg-4 col-md-5 col-sm-7 col-xs-4">
                <div className="head1">
                  <span className="material-icons">grid_view</span>
                  <h3>Dashboard</h3>
                </div>
                <div className="dashboard">
                  <div className="username">
                    <i className="fas fa-user"></i>
                    <h3>Username</h3>
                  </div>
                  <div className="li-1">
                    <ul>
                      <div clasNames="posts">
                        <li>
                          <i className="fas fa-list"></i>Posts
                        </li>
                      </div>
                      <div className="analytics">
                        <li>
                          <i className="fas fa-chart-line"></i>Analytics
                        </li>
                      </div>
                      <div className="media">
                        <li>
                          <i className="fas fa-film"></i>Media
                        </li>
                      </div>
                      <div className="comments">
                        <li>
                          <i className="fas fa-comments"></i>Comments
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="li-2">
                    <ul>
                      <li>
                        <span className="material-icons">settings</span>Settings
                      </li>
                      <li>
                        <span className="material-icons">logout</span>Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-9">
          <div className="right col-lg-8 col-md-7 col-sm-5 col-xs-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab
              quidem maxime doloribus aperiam itaque eum, illo odit alias at
              numquam tenetur repellendus accusamus sunt aspernatur, deleniti,
              quos quas tempora? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non voluptate, commodi fuga voluptatibus corrupti
              animi, sed expedita ratione rem sit odio, blanditiis quos molestiae.
              Aspero unde repellat dolores nobis, quaerat
              ducimus nemo nesciunt perferendis distinctio perspiciatis quas
              molestias velit.
            </p>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Dashboard;



        