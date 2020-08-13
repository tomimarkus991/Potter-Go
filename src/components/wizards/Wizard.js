import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer";
import Spinner from "../layout/spinner/Spinner";
import NotFound from "../pages/NotFound";

const Wizard = ({ match }) => {
  const fetchWizard = async () => {
    const res = await axios.get(
      `https://www.potterapi.com/v1/characters/${match.params.id}?key=$2a$10$ySBrKvbcDFU/nmahzEQPRej0W0ItuaCWrJWCy9VZ.Mcf.3GQiMDZ2`
    );
    return res.data;
  };
  const { data, status } = useQuery("getWizard", fetchWizard);
  if (status === "success") {
    if (data.name === "CastError") {
      return <NotFound />;
    }
    const {
      name,
      alias,
      wand,
      boggart,
      patronus,
      school,
      species,
      role,
      bloodStatus,
      ministryOfMagic,
      deathEater,
      dumbledoresArmy,
      orderOfThePhoenix,
    } = data;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <div className="wizard-container">
          {name && <div className="wizard-name">{name}</div>}
          {alias && <div className="wizard-alias">{alias}</div>}
          {school && <div className="wizard-school">{school}</div>}
          {role && (
            <div className="wizard-role">
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </div>
          )}
          {wand && <div className="wizard-wand">{wand}</div>}
          <div className="wizard-other">
            {patronus && (
              <div className="wizard-patronus">
                Patronous:{" "}
                {patronus.charAt(0).toUpperCase() + patronus.slice(1)}
              </div>
            )}
            {boggart && (
              <div className="wizard-boggart">
                Boggart: {boggart.charAt(0).toUpperCase() + boggart.slice(1)}
              </div>
            )}
            {species && (
              <div className="wizard-species">
                Species: {species.charAt(0).toUpperCase() + species.slice(1)}
              </div>
            )}
            {bloodStatus && (
              <div className="wizard-bloodStatus">
                Blood Status:{" "}
                {bloodStatus.charAt(0).toUpperCase() + bloodStatus.slice(1)}
              </div>
            )}
          </div>
          <div className="is-wizard-that">
            {ministryOfMagic ? (
              <div>
                <span>Ministry of Magic </span>
                <i className="far fa-check-circle" />
              </div>
            ) : (
              <div>
                <span>Ministry of Magic </span>
                <i className="fas fa-times" />
              </div>
            )}
            {deathEater ? (
              <div>
                <span>Death Eater </span>
                <i className="far fa-check-circle" />
              </div>
            ) : (
              <div>
                <span>Death Eater </span>
                <i className="fas fa-times" />
              </div>
            )}
            {dumbledoresArmy ? (
              <div>
                <span>Dumbledores Army </span>
                <i className="far fa-check-circle" />
              </div>
            ) : (
              <div>
                <span>Dumbledores Army </span>
                <i className="fas fa-times" />
              </div>
            )}
            {orderOfThePhoenix ? (
              <div className="order-of-the-phoenix">
                <span>Order of the Phoenix </span>
                <i className="far fa-check-circle" />
              </div>
            ) : (
              <div className="order-of-the-phoenix">
                <span>Order of the Phoenix </span>
                <i className="fas fa-times" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  } else {
    return <Spinner />;
  }
};

export default Wizard;
