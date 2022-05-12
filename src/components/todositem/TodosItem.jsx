import React from "react";

import { db } from "../../firebase";
import { ref, remove, update } from "firebase/database";

import { useAuth } from "../../hook/useAuth";

import "./todositem.scss";

const TodosItem = ({ tid, title, subtitle, done }) => {
  const { id } = useAuth();

  const handleDelete = (id) => {
    remove(ref(db, `todos/${id}/userTodo/` + tid));
  };

  const handeleDone = (tid) => {
    update(ref(db, `todos/${id}/userTodo/` + tid), { done: !done });
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
          handeleDone(tid);
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
