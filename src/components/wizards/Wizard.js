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
        <div>
          <div>{name}</div>
          <div>{school}</div>
          <div>{species}</div>
          <div>{role}</div>
          <div>{bloodStatus}</div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            {orderOfThePhoenix ? (
              <div>
                <span>Order of the Phoenix </span>
                <i className="far fa-check-circle" />
              </div>
            ) : (
              <div>
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
