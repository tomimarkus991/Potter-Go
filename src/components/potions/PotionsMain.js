import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import Search from "../layout/Search";
import Potions from "./Potions";
import Pagination from "../Pagination";
import { motion } from "framer";

const PotionsMain = () => {
  const {
    potions,
    getPotions,
    isLoading,
    isSearching,
    currentPage,
    itemsPerPage,
  } = useContext(PotterContext);

  useEffect(() => {
    getPotions();
  }, []);
  // Change page

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = potions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <motion.h1 className="headline" drag={true}>
        Potions
      </motion.h1>
      <Search potions={potions} />
      <Potions
        potions={currentItems}
        isLoading={isLoading}
        isSearching={isSearching}
      />
      <Pagination itemsPerPage={itemsPerPage} totalItems={potions.length} />
    </div>
  );
};

export default PotionsMain;
