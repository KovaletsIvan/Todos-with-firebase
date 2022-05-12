import React, { useState } from "react";


import "./form.scss";

export const Form = ({ title, handleClick }) => {
  
  const [state, setState] = useState({ email: "", token: "" });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { email, token } = state;
  return (
    <>
      <form className="form">
        <input
          className="form-input email-input"
          type="email"
          name="email"
          value={state.email}
          onChange={onChange}
          placeholder="email"
        />
        <input
          className="form-input password-input"
          type="password"
          name="token"
          value={state.token}
          onChange={onChange}
          placeholder="pssword"
        />
        <button
          className="form-btn"
          onClick={(e) => {
            e.preventDefault();
            handleClick(email, token);
            setState({ email: "", token: "" });
          }}
          disabled={state.email && state.token ? false : true}
        >
          {title}
        </button>
      </form>
    </>
  );
};
export default Form;
