import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PotionItem from "../potions/PotionItem";

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
        <ul className="searchUL list-group-default potion-search-ul">
          {potions.map((potion) => {
            return (
              <li
                className="list-group-item potion-main-item search-potion-item"
                key={potion._id}
              >
                <motion.div
                  className="potion-list-item"
                  initial={{
                    fontSize: "25px",
                  }}
                  whileHover={{ color: "#4090fa", scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <PotionItem potion={potion} />
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
