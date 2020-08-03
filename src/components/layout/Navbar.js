import React from "react";
import { Link } from "react-router-dom";
import {
  HOGWARTS_ICON,
  WIZARDS_ICON,
  POTIONS_ICON,
  HOUSES_ICON,
  SORTING_HAT_ICON,
  HOGWARTS_TRAIN,
} from "../../assets/icons/icons";
import HogwartsRegular from "../../assets/icons/hogwarts-regular.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <li className="navbar-nav nav-item">
        <Link className="nav-link" to="/">
          <img className="nav-img" src={HogwartsRegular} alt="Hogwarts" />
          <span className="nav-text">Harry Potter</span>
        </Link>
      </li>
      <ul className="navbar-nav">
        <li>
          <Link className="nav-link" to="/">
            <img
              src={HOGWARTS_TRAIN}
              alt="Hogwarts Train"
              style={{ width: "4em" }}
            />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/wizards">
            <img src={WIZARDS_ICON} alt="Wizards" style={{ width: "4em" }} />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/potions">
            <img src={POTIONS_ICON} alt="Potions" style={{ width: "4em" }} />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/houses">
            <img src={HOUSES_ICON} alt="Houses" style={{ width: "4em" }} />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sortingHat">
            <img
              src={SORTING_HAT_ICON}
              alt="Sorting Hat"
              style={{ width: "4em" }}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
