import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { login } from "../store/auth.actions";

import Form from "./form/Form";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          login({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/", { replace: true });
      })
      .catch(() => alert("Ivalid user!"));
  };
  return <Form title="Sing in" handleClick={handleLogin} />;
};
export default Login;
