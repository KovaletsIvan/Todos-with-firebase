import React from "react";
import { Link } from "react-router-dom";
import { SingUp } from "../../components/SingUp";

import "./register.scss";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1 className="title">Register</h1>
      <SingUp />
      <p className="linck-holder">
        Already have an account?{" "}
        <Link className="linck" to="/login">
          Sing in
        </Link>
      </p>
    </div>
  );
};
export default RegisterPage;
