import React from "react";
import TodosItem from "../todositem/TodosItem";

import "./todoslist.scss";

const TodosList = ({ todos, showTodosLimit, limits }) => {
  if (!todos.length) {
    return <div className="no-data">No Data</div>;
  }

  return (
    <div className="todos-list">
      <ul className="list">
        {todos.slice(0, limits).map((todo) => (
          <TodosItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            subtitle={todo.subtitle}
            done={todo.done}
          />
        ))}
      </ul>
      <button className="limit-btn" onClick={showTodosLimit}>
        Show more
      </button>
    </div>
  );
};
export default TodosList;
