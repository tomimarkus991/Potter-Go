import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Wizard from "./Wizard";

const Wizards = ({ wizards, isLoading, isSearching }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Fragment>
      {isSearching === false && (
        <ul className="list-group namesUL mb-4">
          {wizards.map((wizard) => {
            return (
              <li key={wizard._id} className="list-group-item">
                <Link to={`/wizards/${wizard._id}`}>{wizard.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Wizards;
