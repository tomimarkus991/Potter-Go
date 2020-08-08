import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WizardItem from "./WizardItem";

const Wizards = ({ wizards, isSearching }) => {
  return (
    <Fragment>
      {isSearching === false && (
        <ul className="list-group-default wrapper">
          {wizards.map((wizard) => {
            return (
              <motion.li
                key={wizard._id}
                className="list-group-item wizardLI wizard-main-item"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link className="default-link" to={`/wizards/${wizard._id}`}>
                  <motion.span
                    className="wizard-name"
                    initial={{ fontSize: "30px" }}
                    whileHover={{ color: "#4090fa" }}
                  >
                    <WizardItem wizard={wizard} />
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
