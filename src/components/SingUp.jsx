import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { login } from "../store/auth.actions";
import Form from "./form/Form";

import React from "react";

export const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistr = (email, password) => {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <Form title="Register" handleClick={handleRegistr} />;
};
