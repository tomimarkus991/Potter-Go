import React, { useReducer } from "react";
import PotterContext from "./PotterContext";
import PotterReducer from "./PotterReducer";
import axios from "axios";
import {
  SET_SEARCHING,
  SET_LOADING,
  SET_POTIONS,
  SET_PAGE_NUMBER,
} from "../types";

const PotterState = ({ children }) => {
  const initialState = {
    isSearching: false,
    isLoading: false,
    potions: [],
    currentPage: 1,
    itemsPerPage: 13,
  };
  const [state, dispatch] = useReducer(PotterReducer, initialState);
  const { isSearching, isLoading, potions, currentPage, itemsPerPage } = state;

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
    } else {
      return <div>Loading...</div>;
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

  const getPotions = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://www.potterapi.com/v1/spells?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2"
    );
    dispatch({ type: SET_POTIONS, payload: res.data });
    setLoading(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setSearching = (isSearching) =>
    dispatch({ type: SET_SEARCHING, payload: isSearching });

  const setLoading = (isLoading) =>
    dispatch({ type: SET_LOADING, payload: isLoading });

  const setCurrentPage = (pageNumber) =>
    dispatch({ type: SET_PAGE_NUMBER, payload: pageNumber });

  return (
    <PotterContext.Provider
      value={{
        isSearching,
        isLoading,
        potions,
        getPotions,
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
