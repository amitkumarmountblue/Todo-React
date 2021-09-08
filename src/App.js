import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingText, setEditingText] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  function deleteTask(id) {
    let newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function editTask(id) {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(newTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>What's plan for today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            {todo.id === todoEditing ? (
              <input
                type="text"
                placeholder="Enter new Todo"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => editTask(todo.id)}>Submit</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
