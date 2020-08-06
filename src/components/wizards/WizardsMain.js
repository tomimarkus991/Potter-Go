import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import Wizards from "./Wizards";
import Pagination from "../Pagination";
import Search from "../layout/Search";
import { motion } from "framer-motion";

const WizardsMain = () => {
  const {
    isSearching,
    isLoading,
    wizards,
    getWizards,
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
    <div>
      <motion.h1 className="headline" drag={true}>
        Wizards
      </motion.h1>
      <Search wizards={wizards} />
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
