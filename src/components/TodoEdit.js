import React, { useState, useContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { UserContext } from "./TodoOps";

export const UpdateContext=React.createContext();


const Todo = () => {
  const {updateTask}=useContext(UserContext);
  const [editingText, setEditingText] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(editingText.id, value);
    setEditingText({
      id: null,
      value: "",
    });
  };

  if (editingText.id) {
    return <TodoForm editingText={editingText} submitUpdate={submitUpdate} />;
  }

  return (
    <>
    <UpdateContext.Provider value={{setEditingText}}>
    <TodoList/>    
    </UpdateContext.Provider>
    </>
    )
};

export default Todo;
