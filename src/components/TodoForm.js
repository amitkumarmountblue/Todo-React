import React, { useState,useContext } from "react";
import { UserContext } from "./TodoOps";

function TodoForm(props) {
  const {addTask}=useContext(UserContext);
  

  const [todo, setTodo] = useState(
    props.editingText ? props.editingText.value : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(!props.editingText){
      addTask({
        id: Math.floor(Math.random() * 10000),
        text: todo,
      });
    }else{
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: todo,
      })
    }
     

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
