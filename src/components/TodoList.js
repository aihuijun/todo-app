// src/components/TodoList.js
import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <li
        key={index}
        className="todo-item"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

export default TodoList;
