import { ADD_ITEM } from "../actions/strings";

const initialState = {
  todos: [
    {
      id: 1,
      todo: "Mow the lawn",
      complete: false
    },
    { id: 2, todo: "Go to work", complete: false }
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos:[
            ...state.todos,
            {
            id: Date.now(),
            todo: action.payload,
            complete: false
            }
        ]
       
      };

    default:
      return initialState;
  }
}

export default reducer;
