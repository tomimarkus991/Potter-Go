import React, { Fragment } from "react";
import { motion } from "framer-motion";
import PotionItem from "./PotionItem";

const Potions = ({ potions, isSearching }) => {
  return (
    <Fragment>
      {isSearching === false && (
        <ul className="list-group-default wrapper">
          {potions.map((potion) => {
            return (
              <li key={potion._id} className="list-group-item potion-main-item">
                <motion.div
                  className="potion-list-item"
                  initial={{ fontSize: "25px" }}
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
    </Fragment>
  );
};

export default Potions;
