import React, { useState } from "react";
import TodoForm from "./TodoForm";

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

  return todos.map((todo) => (
    <div id="todo-list" key={todo.id} className="todo">
      <div className="todo-text">{todo.text}</div>
      <div className="todo-actions">
        <button
          type="submit"
          onClick={() => setEditingText({ id: todo.id, value: todo.text })}
        >
          Edit
        </button>
        <button type="submit" onClick={() => deleteTask(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
};

export default Todo;
