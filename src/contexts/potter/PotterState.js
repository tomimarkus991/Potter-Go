import React, { useReducer } from "react";
import PotterContext from "./PotterContext";
import PotterReducer from "./PotterReducer";
import axios from "axios";
import {
  SET_SEARCHING,
  SET_LOADING,
  SET_WIZARDS,
  SET_PAGE_NUMBER,
  SET_WIZARD,
} from "../types";

const PotterState = ({ children }) => {
  const initialState = {
    isSearching: false,
    isLoading: false,
    wizards: [],
    wizard: "",
    currentPage: 1,
    itemsPerPage: 10,
  };
  const [state, dispatch] = useReducer(PotterReducer, initialState);
  const {
    isSearching,
    isLoading,
    wizards,
    wizard,
    currentPage,
    itemsPerPage,
  } = state;

  // Wizards
  const filterPeople = (term) => {
    setSearching(true);
    const list = document.querySelector(".wizardsUL");
    if (isSearching) {
      Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("hide"));
      Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("hide"));
    } else {
      return <div>Loading...</div>;
    }
  };

  const handleWizardsSearchChange = (e) => {
    if (e.value === "") {
      setSearching(false);
    } else {
      setSearching(true);
      const term = e.value.trim().toLowerCase();
      filterPeople(term);
    }
  };

  const getWizards = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://www.potterapi.com/v1/characters?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2"
    );
    dispatch({ type: SET_WIZARDS, payload: res.data });
    setLoading(false);
  };

  const getWizardInfo = async (characterId) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.potterapi.com/v1/characters/${characterId}?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    dispatch({ type: SET_WIZARD, payload: res.data });
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
        handleWizardsSearchChange,
        isSearching,
        isLoading,
        getWizards,
        wizards,
        paginate,
        currentPage,
        itemsPerPage,
        getWizardInfo,
        wizard,
      }}
    >
      {children}
    </PotterContext.Provider>
  );
};

export default PotterState;
