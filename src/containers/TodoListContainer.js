// src/containers/TodoListContainer.js
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { Filters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (index) => dispatch(toggleTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
