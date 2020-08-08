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
    const { name } = data[0];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <h1>{name}</h1>
      </motion.div>
    );
  }
};

export default House;
