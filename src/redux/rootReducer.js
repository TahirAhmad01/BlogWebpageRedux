import { combineReducers } from "redux";
import filterBlog from "./FilterBlog/reducer";

const rootReducer = combineReducers({
  filters: filterBlog,
});

export default rootReducer;
