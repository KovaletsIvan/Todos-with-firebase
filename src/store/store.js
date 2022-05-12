import { createStore, combineReducers } from "redux";
import { authReducer } from "./auth.reducer";


const reducer = combineReducers({
  authReducer,

});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
