import React, { useState } from "react";
import ConfettiEffect from "../layout/ConfettiEffect";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const SortingHatMain = () => {
  const [isCalculating, setCalculating] = useState(true);
  const fetchHouse = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/sortingHat?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getRandomHouse", fetchHouse, {
    refetchOnWindowFocus: false,
  });
  setTimeout(() => {
    setCalculating(false);
  }, 2000);
  return (
    <div>
      <motion.h1 className="margin-top">Sortinghat</motion.h1>
      {isCalculating && <div>Calculating</div>}
      {isCalculating === false && status === "success" && (
        <motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            animate={{ rotate: 720 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="margin-top"
          >
            <span className="sortinghat-house">{data}</span>
          </motion.div>
          <ConfettiEffect />
        </motion.div>
      )}
    </div>
  );
};

export default SortingHatMain;
