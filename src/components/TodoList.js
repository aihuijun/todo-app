// src/components/TodoList.js
import React from 'react';

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
        <div className="button-group">
          <button className="edit" onClick={() => {
            const newText = prompt('Edit todo:', todo.text);
            if (newText) {
              editTodo(index, newText);
            }
          }}>Edit</button>
          <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;
