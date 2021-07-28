import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form>
        <input type="text" title="username" placeholder="Email" />
        <input type="password" title="username" placeholder="Password" />
        <button type="submit" className="btn">
          Login
        </button>
        <Link to="" className="forgot">
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Login;
