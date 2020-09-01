import React, { useState } from "react";
import ConfettiEffect from "../layout/ConfettiEffect";
import GryffindorPNG from "../../assets/pictures/gryffindor.png";
import SlytherinPNG from "../../assets/pictures/slytherin.png";
import RavenclawPNG from "../../assets/pictures/ravenclaw.png";
import HufflepuffPNG from "../../assets/pictures/hufflepuff.png";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SortingHatMain = () => {
  const [isCalculating, setCalculating] = useState(true);
  const [isDifficult, setDifficult] = useState(false);
  const [randomTime] = useState(Math.round(Math.random() * 9500 + 5000));
  const fetchHouse = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/sortingHat?key=$2a$10$ySBrKvbcDFU${process.env.REACT_APP_POTTER_API_KEY}`
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
  }, randomTime);
  return (
    <div>
      <motion.h1 className="margin-top heading">Sortinghat</motion.h1>
      {isCalculating && (
        <div className="calculating">
          Taking data from your head. Please wait while I am calculating
        </div>
      )}
      {isDifficult === true && randomTime >= 10000 && (
        <div className="is-difficult">It is very difficult to decide</div>
      )}

      {isCalculating === false && status === "success" && (
        <div>
          <div className="margin-top">
            <div>
              <motion.div
                className="sortinghat-house"
                animate={{ rotate: 720 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                {data}
              </motion.div>
            </div>
            <div>
              {data === "Gryffindor" && (
                <Link to={`/houses/5a05e2b252f721a3cf2ea33f`}>
                  {" "}
                  <motion.img
                    className="house-image-sorting"
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    src={GryffindorPNG}
                    alt="House-Icon"
                  />
                </Link>
              )}
              {data === "Ravenclaw" && (
                <Link to="/houses/5a05da69d45bd0a11bd5e06f">
                  <motion.img
                    className="house-image-sorting"
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    src={RavenclawPNG}
                    alt="House-Icon"
                  />
                </Link>
              )}
              {data === "Slytherin" && (
                <Link to="/houses/5a05dc8cd45bd0a11bd5e071">
                  <motion.img
                    className="house-image-sorting"
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    src={SlytherinPNG}
                    alt="House-Icon"
                  />
                </Link>
              )}
              {data === "Hufflepuff" && (
                <Link to="/houses/5a05dc58d45bd0a11bd5e070">
                  <motion.img
                    className="house-image-sorting"
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    src={HufflepuffPNG}
                    alt="House-Icon"
                  />
                </Link>
              )}
            </div>
          </div>
          <ConfettiEffect />
        </div>
      )}
    </div>
  );
};

export default SortingHatMain;
