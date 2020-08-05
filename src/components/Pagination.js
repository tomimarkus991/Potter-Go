import React, { useContext, Fragment } from "react";
import PotterContext from "../contexts/potter/PotterContext";

const Pagination = ({ itemsPerPage, totalItems }) => {
  const { paginate, currentPage, isSearching } = useContext(PotterContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Fragment>
      {isSearching === false && (
        <Fragment>
          {" "}
          <button onClick={() => paginate(Math.max(currentPage - 1, 1))}>
            prev
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() =>
              paginate(Math.min(currentPage + 1, pageNumbers.length))
            }
          >
            next
          </button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Pagination;
