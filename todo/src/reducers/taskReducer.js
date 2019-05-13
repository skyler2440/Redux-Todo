import { CREATE_TASK } from "../actions";
import _ from 'lodash'
const INITIAL_STATE = {
  task: [
    {
      title: "title",
      description: "description",
      priority: "High",
      id: "3678"
    }
  ]
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TASK: {
      return {
        ...state,
        task : _.concat(...state.task, action.payload)
      };
    }
    default:
      return state;
  }
};
