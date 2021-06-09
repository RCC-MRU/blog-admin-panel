import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <p className="text-center">
        Copywright &copy;{new Date().getFullYear()} | Health &amp; Fitness
      </p>
    </React.Fragment>
  );
};

export default Footer;
