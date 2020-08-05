import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import Wizards from "./Wizards";
import Pagination from "../Pagination";
import SearchWizards from "./SearchWizards";
import { motion } from "framer-motion";
import { Frame } from "framer";
const WizardsMain = () => {
  const {
    getWizards,
    isSearching,
    isLoading,
    wizards,
    currentPage,
    itemsPerPage,
  } = useContext(PotterContext);
  useEffect(() => {
    getWizards();
  }, []);
  // Change page

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wizards.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mt-5">
      <motion.h1 className="headline" drag={true}>
        Wizards
      </motion.h1>
      <SearchWizards
        wizards={wizards}
        isSearching={isSearching}
        isLoading={isLoading}
      />
      <Wizards
        wizards={currentItems}
        isLoading={isLoading}
        isSearching={isSearching}
      />
      <Pagination itemsPerPage={itemsPerPage} totalItems={wizards.length} />
    </div>
  );
};

export default WizardsMain;
