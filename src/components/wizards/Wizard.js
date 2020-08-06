import React, { useContext } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer";

const Wizard = ({ match }) => {
  const fetchWizard = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/characters/${match.params.id}?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getWizard", fetchWizard);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {status === "success" && <div>{data.name}</div>}
    </motion.div>
  );
};

export default Wizard;
