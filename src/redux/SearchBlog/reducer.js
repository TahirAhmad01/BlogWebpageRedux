import { SEARCH } from "./actionTypes";
const initialState = {
  searchKeyWord: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        searchKeyWord: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
