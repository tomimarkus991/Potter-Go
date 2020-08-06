import React, { useEffect, useContext } from "react";
import PotterContext from "../../contexts/potter/PotterContext";

const Wizard = ({ match }) => {
  const { getWizard, isLoading, wizard } = useContext(PotterContext);
  useEffect(() => {
    getWizard(match.params.id);
  }, []);
  const {
    bloodStatus,
    deathEater,
    dumbledoresArmy,
    ministryOfMagic,
    name,
    orderOfThePhoenix,
    role,
    species,
  } = wizard;
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isLoading === false && <div>{name}</div>}
    </div>
  );
};

export default Wizard;
