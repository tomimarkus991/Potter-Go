import React, { useContext } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import Wizards from "./Wizards";
import Pagination from "../Pagination";
import Search from "../layout/Search";
import { motion } from "framer-motion";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../layout/spinner/Spinner";

const WizardsMain = () => {
  const { isSearching, isLoading, currentPage, itemsPerPage } = useContext(
    PotterContext
  );

  const fetchWizards = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/characters?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getWizards", fetchWizards, {
    refetchOnWindowFocus: false,
  });

  if (status === "success") {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <motion.h1 className="headline" drag={true}>
          Wizards
        </motion.h1>
        <Search wizards={data} />
        <motion.div
          initial={{ y: "-50vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Wizards
            wizards={currentItems}
            isLoading={isLoading}
            isSearching={isSearching}
          />
        </motion.div>
        <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} />
      </div>
    );
  }
  if (status === "loading") {
    return <Spinner />;
  }
};

export default WizardsMain;
