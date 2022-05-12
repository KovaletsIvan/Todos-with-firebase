export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodos = (title, subtitle, done) => {
  return {
    type: ADD_TODO,
    payload: { title, subtitle, done },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};
