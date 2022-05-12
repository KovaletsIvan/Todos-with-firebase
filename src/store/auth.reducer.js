import { LOGIN, LOGOUT } from "./auth.actions";

const initialState = { user: {} };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return { ...state, user: {} };
    default:
      return state;
  }
};
