import React from "react";

const LeftPanel = () => {
  return (
    <React.Fragment>
      <main className="main-styling">
        <section>
          <p>Username</p>
        </section>
        <section>
          <img
            src={process.env.PUBLIC_URL + "Images/sample.png"}
            alt="user profile"
            className="img-fluid user-profile-img"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quibusdam minus eligendi iusto aliquid eos cumque, voluptatum
            necessitatibus quidem alias! Debitis natus non porro vero ipsum
            quisquam eaque veniam reiciendis.
          </p>
        </section>
        <section>
          <div>
            <i className="fa fa-cog fa-lg"></i>Settings
          </div>
          <div>
            <i className="fa fa-sign-out fa-lg"></i>Logout
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default LeftPanel;
