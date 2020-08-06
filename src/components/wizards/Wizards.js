import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wizards = ({ wizards, isLoading, isSearching }) => {
  return (
    <Fragment>
      {isSearching === false && (
        <ul className="list-group-default">
          {wizards.map((wizard) => {
            return (
              <motion.li
                key={wizard._id}
                className="list-group-item"
                whileHover={{ scale: 1.5, color: "#4090fa" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link className="default-link" to={`/wizards/${wizard._id}`}>
                  <motion.span
                    initial={{ fontSize: "25px" }}
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
    </Fragment>
  );
};

export default Wizards;
