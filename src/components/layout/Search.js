import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import { Link } from "react-router-dom";
import { motion } from "framer";

const Search = ({ wizards, potions }) => {
  const { handleSearchChange, isSearching } = useContext(PotterContext);
  useEffect(() => {
    const searchInput = document.querySelector(".search-input");
    handleSearchChange(searchInput);
  }, []);
  return (
    <div>
      <motion.input
        type="text"
        placeholder="Find someone"
        className="search-input"
        onChange={(e) => handleSearchChange(e.target)}
        whileHover={{ scale: 1.2 }}
      />
      {isSearching && wizards !== undefined && potions === undefined && (
        <ul className="searchUL">
          {wizards.map((wizard) => {
            return (
              <li key={wizard._id} className="list-group-item">
                <Link to={`/wizards/${wizard._id}`}>{wizard.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
      {isSearching && potions !== undefined && wizards === undefined && (
        <ul className="searchUL">
          {potions.map((potion) => {
            console.log(potion);
            return (
              <li key={potion._id} className="list-group-item">
                <span>{potion.spell}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
