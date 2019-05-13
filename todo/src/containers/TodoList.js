import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);

    default:
      throw new Error("Unknown Filter: " + filter);
  }
};

const mSTP = state =>({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
export default connect(mSTP, {toggleTodo})(TodoList);