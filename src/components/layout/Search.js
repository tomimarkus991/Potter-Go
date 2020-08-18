import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = ({ wizards, potions }) => {
  const { handleSearchChange, isSearching } = useContext(PotterContext);
  useEffect(() => {
    let searchInput = document.querySelector(".search-input");
    handleSearchChange(searchInput);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <motion.input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={(e) => handleSearchChange(e.target)}
        whileHover={{ scale: 1.2 }}
      />
      {isSearching && wizards !== undefined && potions === undefined && (
        <ul className="searchUL list-group-default">
          {wizards.map((wizard) => {
            return (
              <li key={wizard._id}>
                <Link className="default-link" to={`/wizards/${wizard._id}`}>
                  <motion.div
                    initial={{ fontSize: "30px", color: "#e4e6eb" }}
                    whileHover={{ color: "#4090fa", scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {wizard.name}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {isSearching && potions !== undefined && wizards === undefined && (
        <ul className="searchUL list-group-default">
          {potions.map((potion) => {
            return (
              <li key={potion._id}>
                <motion.div
                  initial={{
                    fontSize: "30px",
                    color: "#e4e6eb",
                    cursor: "default",
                  }}
                  whileHover={{ color: "#4090fa", scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {potion.spell}
                </motion.div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
