import React, { useState } from "react";

function TodoForm(props) {
  const [todo, setTodo] = useState(
    props.editingText ? props.editingText.value : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: todo,
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} id="todo-list" className="todo-actions">
      {props.editingText ? (
        <div className="todo-text">
          <input
            placeholder="Enter new Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="todo-text">
          <input
            placeholder="Enter Todo ..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleSubmit}>Add todo</button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
