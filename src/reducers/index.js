// src/reducers/index.js
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, UNDO, REDO, Filters } from '../actions';

const initialState = {
  todos: [],
  filter: Filters.SHOW_ALL,
  history: [],
  future: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
        history: [...state.history, state],
        future: [],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        ),
        history: [...state.history, state],
        future: [],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case UNDO:
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      return {
        ...previous,
        history: state.history.slice(0, -1),
        future: [state, ...state.future],
      };
    case REDO:
      if (state.future.length === 0) return state;
      const next = state.future[0];
      return {
        ...next,
        history: [...state.history, state],
        future: state.future.slice(1),
      };
    default:
      return state;
  }
};

export default todoReducer;
