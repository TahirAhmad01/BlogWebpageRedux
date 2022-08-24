import { AUTHOR, CATEGORIES } from "./actionTypes";

export const filterByCategory = (categories) => {
  return {
    type: CATEGORIES,
    payload: categories,
  };
};

export const filterByAuthor = (author) => {
  return {
    type: AUTHOR,
    payload: author,
  };
};
