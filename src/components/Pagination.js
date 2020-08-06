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
        <div className="margin-top">
          {" "}
          <button
            className="pagination-button"
            onClick={() => paginate(Math.max(currentPage - 1, 1))}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <span className="current-page">{currentPage}</span>
          <button
            className="pagination-button"
            onClick={() =>
              paginate(Math.min(currentPage + 1, pageNumbers.length))
            }
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Pagination;
