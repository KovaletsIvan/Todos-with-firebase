import React from "react";

import { db } from "../../firebase";
import { ref, remove, update } from "firebase/database";

import "./todositem.scss";

const TodosItem = ({ id, title, subtitle, done }) => {
  const handleDelete = (id) => {
    remove(ref(db, `todos/` + id));
  };

  const handeleDone = (id) => {
    update(ref(db, "todos/" + id), { done: !done });
  };
  const classDone = `item-title ${done ? "done" : null}`;
  return (
    <li className="list-item">
      <div className="todo-data">
        <span className={classDone}>{title}</span>
        <span className="item-subtitle">{subtitle}</span>
      </div>
      <input
        className="todos-checkbox"
        type="checkbox"
        checked={done}
        onChange={() => {
          handeleDone(id);
        }}
      />
      <span
        className="remove-item"
        onClick={() => {
          handleDelete(id);
        }}
      >
        +
      </span>
    </li>
  );
};
export default TodosItem;
