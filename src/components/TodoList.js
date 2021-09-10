import React from 'react'

function TodoList(props) {
    return props.todos.map((todo) => (
        <div id="todo-list" key={todo.id} className="todo">
          <div className="todo-text">{todo.text}</div>
          <div className="todo-actions">
            <button
              type="submit"
              onClick={() => props.setEditingText({ id: todo.id, value: todo.text })}
            >
              Edit
            </button>
            <button type="submit" onClick={() => props.deleteTask(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ));
    
}

export default TodoList
