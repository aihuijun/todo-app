// src/App.js
import React from 'react';
import AddTodoContainer from './containers/AddTodoContainer';
import TodoListContainer from './containers/TodoListContainer';
import UndoRedoContainer from './containers/UndoRedoContainer';
import FilterContainer from './containers/FilterContainer';

const App = () => (
  <div className="container">
    <h1>Todo-app</h1>
    <AddTodoContainer />
    <FilterContainer />
    <TodoListContainer />
    <UndoRedoContainer />
  </div>
);

export default App;
