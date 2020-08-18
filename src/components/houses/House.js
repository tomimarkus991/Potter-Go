import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../layout/spinner/Spinner";
import { motion } from "framer";

const House = ({ match }) => {
  let houseID = match.params.id;
  const fetchHouses = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/houses/${houseID}?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getHouse", fetchHouses);

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "success") {
    const {
      name,
      founder,
      mascot,
      headOfHouse,
      houseGhost,
      values,
      colors,
    } = data[0];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <div className="house-container">
          <div className="house-name">{name}</div>
          <div className="house-founder">{founder}</div>
          <div className="house-mascot">{mascot}</div>
          <div className="house-head">{headOfHouse}</div>
          <div className="house-ghost">{houseGhost}</div>
          <div className="house-values">
            They value{" "}
            {values.map((value) => {
              return <p className="house-value">{value} </p>;
            })}
          </div>
          <div className="house-colors">
            House colors are{" "}
            {colors.map((color) => {
              return (
                <p className="house-color">
                  {color.charAt(0).toUpperCase() + color.slice(1)}{" "}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }
};

export default House;
