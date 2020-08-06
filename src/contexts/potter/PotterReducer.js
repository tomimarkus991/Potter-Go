import {
  SET_SEARCHING,
  SET_LOADING,
  SET_POTIONS,
  SET_PAGE_NUMBER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SEARCHING:
      return {
        ...state,
        isSearching: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_POTIONS:
      return {
        ...state,
        potions: action.payload,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      break;
  }
};
