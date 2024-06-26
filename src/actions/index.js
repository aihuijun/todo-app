// src/actions/index.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const undo = () => ({
  type: UNDO,
});

export const redo = () => ({
  type: REDO,
});

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};
