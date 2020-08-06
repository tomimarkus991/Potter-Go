import React, { Fragment } from "react";
import { motion } from "framer-motion";
import PotionItem from "./PotionItem";

const Potions = ({ potions, isSearching }) => {
  return (
    <Fragment>
      {isSearching === false && (
        <ul className="list-group-default">
          {potions.map((potion) => {
            return (
              <motion.li
                key={potion._id}
                className="list-group-item"
                whileHover={{ scale: 1.5, color: "#4090fa" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="potion-list-item"
                  initial={{ fontSize: "30px" }}
                  whileHover={{ color: "#4090fa" }}
                >
                  <PotionItem potion={potion} />
                </motion.span>
              </motion.li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Potions;
