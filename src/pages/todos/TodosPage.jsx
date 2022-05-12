import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { ref, set, onValue } from "firebase/database";

import TodosList from "../../components/todoslist/TodosList";

import { logout } from "../../store/auth.actions";

import { useAuth } from "../../hook/useAuth";

import "./todos.scss";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  let [limit, setLimit] = useState(5);
  const [todo, setTodo] = useState({
    title: "",
    subtitle: "",
    done: false,
    id: null,
  });
  const { isAuth, email, id } = useAuth();
  const dispatch = useDispatch();

  const showTodosLimit = () => {
    setLimit((limit += 5));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const todosRef = ref(db, `todos/${id}/userTodo/`);

  useEffect(() => {
    const unsubscribe = onValue(todosRef, (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        setTodos(Object.values(data));
      } else {
        setTodos([]);
      }
    });
    return unsubscribe;
  }, [todosRef]);

  const writeUserData = async () => {
    try {
      await set(ref(db, `todos/${id}/userTodo/` + todo.id), todo);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      id: Date.now().toString(),
    });
  };

  const clearForm = () => {
    setTodo({ title: "", subtitle: "", done: false, id: null });
  };

  return isAuth ? (
    <div className="todos-page">
      <h1>TODOS</h1>
      <button className="logout-btn" onClick={handleLogout}>
        logout from {email}
      </button>
      <form className="todos-form">
        <input
          className="todos-input"
          type="text"
          name="title"
          value={todo.title}
          onChange={onChange}
          placeholder="title"
        />
        <input
          className="todos-input"
          type="text"
          name="subtitle"
          value={todo.subtitle}
          onChange={onChange}
          placeholder="subtitle"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            clearForm();
            writeUserData();
          }}
          className="todos-btn"
          disabled={todo.title && todo.subtitle ? false : true}
        >
          Add Todo
        </button>
      </form>

      <TodosList todos={todos} limits={limit} showTodosLimit={showTodosLimit} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default TodosPage;
