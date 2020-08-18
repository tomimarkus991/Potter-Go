import React from "react";
import Houses from "./Houses";
import { motion } from "framer";

const HousesMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.45 }}
    >
      <h1 className="headline heading">Houses</h1>
      <Houses />
    </motion.div>
  );
};

export default HousesMain;
