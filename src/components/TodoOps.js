import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Header from "./Header";

function TodoOps() {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    setTodos([todo, ...todos]);
  };

  const updateTask = (todoId, newValue) => {
    setTodos((todos) =>
      todos.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const deleteTask = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <TodoForm onSubmit={addTask} />
      <Todo todos={todos} deleteTask={deleteTask} updateTask={updateTask} />
    </>
  );
}

export default TodoOps;
