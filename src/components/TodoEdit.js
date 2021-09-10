import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = ({ todos, deleteTask, updateTask }) => {
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
    return <TodoForm editingText={editingText} onSubmit={submitUpdate} />;
  }

  return (
    <>
    <TodoList todos={todos} setEditingText={setEditingText} deleteTask={deleteTask}/>
    </>
  )
};

export default Todo;
