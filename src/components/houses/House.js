import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../layout/spinner/Spinner";
import { motion } from "framer";

const House = ({ match }) => {
  let houseID = match.params.id;
  const fetchHouses = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/houses/${houseID}?key=$2a$10$ySBrKvbcDFU${process.env.REACT_APP_POTTER_API_KEY}`
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

    let houseValues = values.slice(0).shift();
    let houseColors = colors.slice(0).shift();

    values
      .slice(1, values.length - 1)
      .map((value) => (houseValues += ", " + value));

    houseValues += " & " + values.slice(-1).pop();

    colors
      .slice(1, colors.length - 1)
      .map((color) => (houseColors += ", " + color));

    houseColors += " & " + colors.slice(-1).pop();

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <div className="house-container">
          <div className="house-name">{name}</div>
          <div className="house-founder">Founder - {founder}</div>
          <div className="house-mascot">
            Mascot - {mascot.charAt(0).toUpperCase() + mascot.slice(1)}
          </div>
          <div className="house-head">Head of House - {headOfHouse}</div>
          <div className="house-ghost">House Ghost - {houseGhost}</div>
          <div className="house-values">They value {houseValues}</div>
          <div className="house-colors">House colors are {houseColors}</div>
        </div>
      </motion.div>
    );
  }
};

export default House;
