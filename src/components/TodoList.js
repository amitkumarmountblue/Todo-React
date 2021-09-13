import React,{useContext} from 'react'
import { UserContext } from "./TodoOps";
import { UpdateContext } from "./TodoEdit"

function TodoList() {
  const {todos,deleteTask}=useContext(UserContext);
  const {setEditingText}=useContext(UpdateContext);


    return todos.map((todo) => (
        <div key={todo.id} id="todo-list" className="todo">
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
    
}

export default TodoList
