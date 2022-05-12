import { createStore, combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { todosReducer } from "./todos.reducer";

const reducer = combineReducers({
  authReducer,
  todosReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
