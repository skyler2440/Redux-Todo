import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "./strings";

export function newTodo(addTodo) {
  console.log(newTodo);
  return {
    type: ADD_ITEM,
    payload: addTodo,
    id: Date.now()
  };
};

export const removeTodo = id => {
  console.log(id);
  return {
    type: REMOVE_ITEM,
    payload: id
  };
};

export const editTodo = id => {
  console.log(id);
  return {
    type: EDIT_ITEM,
    payload: id
  };
};
