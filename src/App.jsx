import { Routes, Route } from "react-router-dom";

import TodosPage from "./pages/todos/TodosPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
