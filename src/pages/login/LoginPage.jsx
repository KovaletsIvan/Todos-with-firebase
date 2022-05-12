import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login";

import "./login.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="title">Create your own todo list!</h1>
      <h2 className="login">Login</h2>
      <Login />
      <p className="linck-holder">
        or
        <Link className="linck" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};
export default LoginPage;
