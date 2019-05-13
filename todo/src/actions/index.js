let todoId = 0

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => {
  console.log(todoId);
  return {
    type: ADD_TODO,
    id: todoId++,
    text
  };
};
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
export const setVisibilityFilter = filter =>({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
export const SET_ACTIVE_TODO = 'SET_ACTIVE_TODO';

export const SHOW_ACTIVE_TODO = 'SHOW_ACTIVE_TODO';

export const SET_INACTIVE_TODO = 'SET_INACTIVE_TODO';

export const SHOW_INACTIVE_TODO = 'SHOW_INACTIVE_TODO';

export const DELETE_TODO = 'DELETE_TODO';
