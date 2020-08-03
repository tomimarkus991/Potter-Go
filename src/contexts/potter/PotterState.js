import React, { useReducer } from "react";
import PotterContext from "./PotterContext";
import PotterReducer from "./PotterReducer";
import {} from "../types";

const PotterState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(PotterReducer, initialState);
  const {} = state;
  return <PotterContext.Provider value={{}}>{children}</PotterContext.Provider>;
};

export default PotterState;
