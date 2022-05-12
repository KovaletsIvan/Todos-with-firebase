import { ADD_TODO, REMOVE_TODO } from "./todos.actions";

const initialState = { todos: [] };

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case REMOVE_TODO: {
      const result = state.todos.filter(
        (elem) => elem.id !== action.payload.id
      );
      return result;
    }
    default:
      return state;
  }
};
