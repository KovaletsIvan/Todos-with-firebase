export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = ({ id, token, email }) => {
  return {
    type: LOGIN,
    payload: { id, token, email },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
