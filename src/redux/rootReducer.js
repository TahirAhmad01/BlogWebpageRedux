import { combineReducers } from "redux";
import filterBlog from "./FilterBlog/reducer";
import searchReducer from "./SearchBlog/reducer";

const rootReducer = combineReducers({
  filters: filterBlog,
  search: searchReducer,
});

export default rootReducer;
