import { AUTHOR, CATEGORIES } from "./actionTypes";
import initialState from "./initialState";

const filterBlog = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return state.filter((blog) => blog.categories === action.payload);

    case AUTHOR:
      return state.filter((blog) => blog.author === action.payload);

    default:
      return state;
  }
};

export default filterBlog;
