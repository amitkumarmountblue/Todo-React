import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Header from "./Header";
import TodoEdit from "./TodoEdit"

export const UserContext=React.createContext();

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
    <UserContext.Provider value={{addTask,todos,deleteTask,updateTask}}>
      <Header/>
      <TodoForm />
      <TodoEdit/>
    </UserContext.Provider>
    </>
  );
}

export default TodoOps;
