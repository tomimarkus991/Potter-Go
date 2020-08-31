import React, { useContext } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import Search from "../layout/Search";
import Potions from "./Potions";
import Pagination from "../Pagination";
import { motion } from "framer";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "../layout/spinner/Spinner";

const PotionsMain = () => {
  const { isLoading, isSearching, currentPage, itemsPerPage } = useContext(
    PotterContext
  );

  const fetchPotions = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/spells?key=$2a$10$ySBrKvbcDFU${process.env.REACT_APP_POTTER_API_KEY}`
    );
    return res.data;
  };

  const { data, status } = useQuery("getPotions", fetchPotions, {
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <Spinner />;
  } else if (status === "success") {
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <motion.h1 className="headline heading">Potions</motion.h1>
        <Search potions={data} />
        <motion.div
          initial={{ y: "-50vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Potions
            potions={currentItems}
            isLoading={isLoading}
            isSearching={isSearching}
          />
        </motion.div>
        <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} />
      </div>
    );
  }
};

export default PotionsMain;
