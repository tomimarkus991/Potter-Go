import React from "react";
import GryffindorPNG from "../../assets/pictures/gryffindor.png";
import SlytherinPNG from "../../assets/pictures/slytherin.png";
import RavenclawPNG from "../../assets//pictures/ravenclaw.png";
import HufflepuffPNG from "../../assets/pictures/hufflepuff.png";
import { Link } from "react-router-dom";

const Houses = () => {
  return (
    <div className="houses-wrapper">
      <div className="house-image-holder">
        <Link className="image-link" to={`/houses/5a05e2b252f721a3cf2ea33f`}>
          <img className="house-image" src={GryffindorPNG} alt="gryffindor" />
        </Link>
      </div>
      <div className="house-image-holder">
        <Link className="image-link" to={`/houses/5a05dc8cd45bd0a11bd5e071`}>
          <img className="house-image" src={SlytherinPNG} alt="slytherin" />
        </Link>
      </div>
      <div className="house-image-holder">
        <Link className="image-link" to={`/houses/5a05da69d45bd0a11bd5e06f`}>
          <img className="house-image" src={RavenclawPNG} alt="ravenclaw" />
        </Link>
      </div>
      <div className="house-image-holder">
        <Link className="image-link" to={`/houses/5a05dc58d45bd0a11bd5e070`}>
          <img className="house-image" src={HufflepuffPNG} alt="hufflepuff" />
        </Link>
      </div>
    </div>
  );
};

export default Houses;
