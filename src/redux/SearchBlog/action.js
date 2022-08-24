import { SEARCH } from "./actionTypes";
export const SearchKey = (SearchKeyWord, blogs) => {
  return {
    type: SEARCH,
    payload: SearchKeyWord,
  };
};
