import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visFilter";

export default combineReducers({
  todos,
  visibilityFilter
});
