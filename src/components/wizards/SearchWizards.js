import React, { useContext, useEffect } from "react";
import PotterContext from "../../contexts/potter/PotterContext";
import { Link } from "react-router-dom";

const SearchWizards = ({ wizards }) => {
  const { handleWizardsSearchChange, isSearching } = useContext(PotterContext);
  useEffect(() => {
    const wizardSearchInput = document.querySelector(".wizard-search-input");
    handleWizardsSearchChange(wizardSearchInput);
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Find someone"
        className="wizard-search-input"
        onChange={(e) => handleWizardsSearchChange(e.target)}
      />
      {isSearching && (
        <ul className="list-group wizardsUL mb-4">
          {wizards.map((wizard) => {
            return (
              <li key={wizard._id} className="list-group-item">
                <Link to={`/wizards/${wizard._id}`}>{wizard.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchWizards;
