import React, { useReducer } from "react";
import PotterContext from "./PotterContext";
import PotterReducer from "./PotterReducer";
import { SET_SEARCHING, SET_PAGE_NUMBER } from "../types";

const PotterState = ({ children }) => {
  const initialState = {
    isSearching: false,
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 13,
  };
  const [state, dispatch] = useReducer(PotterReducer, initialState);
  const { isSearching, currentPage, itemsPerPage } = state;

  const filterItems = (term) => {
    setSearching(true);
    const list = document.querySelector(".searchUL");
    if (isSearching) {
      Array.from(list.children)
        .filter((item) => !item.textContent.toLowerCase().includes(term))
        .forEach((item) => item.classList.add("hide"));
      Array.from(list.children)
        .filter((item) => item.textContent.toLowerCase().includes(term))
        .forEach((item) => item.classList.remove("hide"));
    }
  };

  const handleSearchChange = (e) => {
    if (e.value === "") {
      setSearching(false);
    } else {
      setSearching(true);
      const term = e.value.trim().toLowerCase();
      filterItems(term);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setSearching = (isSearching) =>
    dispatch({ type: SET_SEARCHING, payload: isSearching });

  const setCurrentPage = (pageNumber) =>
    dispatch({ type: SET_PAGE_NUMBER, payload: pageNumber });

  return (
    <PotterContext.Provider
      value={{
        isSearching,
        paginate,
        currentPage,
        itemsPerPage,
        handleSearchChange,
      }}
    >
      {children}
    </PotterContext.Provider>
  );
};

export default PotterState;
