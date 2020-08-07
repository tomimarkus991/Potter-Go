import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = ({ wizards, potions }) => {
  const { handleSearchChange, isSearching } = useContext(PotterContext);
  useEffect(() => {
    const searchInput = document.querySelector(".search-input");
    handleSearchChange(searchInput);
    // eslint-disable-next-line
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
        <ul className="searchUL list-group-default">
          {wizards.map((wizard) => {
            return (
              <motion.li
                key={wizard._id}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link className="default-link" to={`/wizards/${wizard._id}`}>
                  <motion.span
                    initial={{ fontSize: "30px" }}
                    whileHover={{ color: "#4090fa" }}
                  >
                    {wizard.name}
                  </motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
      {isSearching && potions !== undefined && wizards === undefined && (
        <ul className="searchUL list-group-default">
          {potions.map((potion) => {
            return (
              <motion.li
                key={potion._id}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="potion-list-item"
                  initial={{ fontSize: "30px" }}
                  whileHover={{ color: "#4090fa" }}
                >
                  {potion.spell}
                </motion.span>
              </motion.li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
