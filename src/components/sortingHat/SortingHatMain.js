import React, { useState } from "react";
import ConfettiEffect from "../layout/ConfettiEffect";
import GryffindorPNG from "../../assets/pictures/gryffindor.png";
import SlytherinPNG from "../../assets/pictures/slytherin.png";
import RavenclawPNG from "../../assets/pictures/ravenclaw.png";
import HufflepuffPNG from "../../assets/pictures/hufflepuff.png";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const SortingHatMain = () => {
  const [isCalculating, setCalculating] = useState(true);
  const [isDifficult, setDifficult] = useState(false);
  const [randomTime] = useState(Math.round(Math.random() * 9500 + 5000));
  const fetchHouse = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/sortingHat?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getRandomHouse", fetchHouse, {
    refetchOnWindowFocus: false,
  });
  if (randomTime >= 10000 && isCalculating === true) {
    setTimeout(() => {
      setDifficult(true);
    }, 4000);
  }
  setTimeout(() => {
    setCalculating(false);
    setDifficult(false);
  }, 1000);
  return (
    <div>
      <motion.h1 className="margin-top">Sortinghat</motion.h1>
      {isCalculating && (
        <div className="calculating">
          Taking data from your head. Please wait while I am calculating
        </div>
      )}
      {isDifficult === true && randomTime >= 10000 && (
        <div className="is-difficult">It is very difficult to decide</div>
      )}

      {isCalculating === false && status === "success" && (
        <motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            animate={{ rotate: 720 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="margin-top"
            drag
          >
            <span className="sortinghat-house">{data}</span>
            <div>
              {data === "Gryffindor" && (
                <img
                  className="house-image-sorting"
                  src={GryffindorPNG}
                  alt="House-Icon"
                />
              )}
              {data === "Ravenclaw" && (
                <img
                  className="house-image-sorting"
                  src={RavenclawPNG}
                  alt="House-Icon"
                />
              )}
              {data === "Slytherin" && (
                <img
                  className="house-image-sorting"
                  src={SlytherinPNG}
                  alt="House-Icon"
                />
              )}
              {data === "Hufflepuff" && (
                <img
                  className="house-image-sorting"
                  src={HufflepuffPNG}
                  alt="House-Icon"
                />
              )}
            </div>
          </motion.div>
          <ConfettiEffect />
        </motion.div>
      )}
    </div>
  );
};

export default SortingHatMain;
