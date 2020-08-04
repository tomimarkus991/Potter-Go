import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HogwartsRegular,
  HomeRegular,
  WizardsRegular,
  PotionsRegular,
  HousesRegular,
  SortingHatRegular,
} from "../../assets/icons/navbarRegular/NavbarRegular";

import {
  HomeHover,
  WizardsHover,
  PotionsHover,
  HousesHover,
  SortingHatHover,
} from "../../assets/icons/navbarHover/NavbarHover";

const Navbar = () => {
  const [homeTrainIcon, setHomeTrainIcon] = useState(HomeRegular);
  const [wizardIcon, setWizardIcon] = useState(WizardsRegular);
  const [potionsIcon, setPotionsIcon] = useState(PotionsRegular);
  const [housesIcon, setHousesIcon] = useState(HousesRegular);
  const [sortingHatIcon, setSortingHatIcon] = useState(SortingHatRegular);
  return (
    <nav className="navbar">
      <span
        className="navbar-toggle"
        onClick={() => {
          const navbarNav = document.querySelector(".navbar-nav");
          navbarNav.classList.toggle("active2");
        }}
      >
        <i className="fas fa-bars"></i>
      </span>
      <li className="nav-logo">
        <Link className="nav-link" to="/">
          <img className="nav-img" src={HogwartsRegular} alt="Hogwarts" />
          <span className="nav-text">Harry Potter</span>
        </Link>
      </li>
      <ul className="navbar-nav">
        <li
          onMouseEnter={() => setHomeTrainIcon(HomeHover)}
          onMouseLeave={() => setHomeTrainIcon(HomeRegular)}
        >
          <NavLink className="nav-link active" to="/">
            <img
              className="nav-icon"
              src={homeTrainIcon}
              alt="Hogwarts Train"
            />
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setWizardIcon(WizardsHover)}
          onMouseLeave={() => setWizardIcon(WizardsRegular)}
        >
          <NavLink className="nav-link active" to="/wizards">
            <img className="nav-icon" src={wizardIcon} alt="Wizards" />
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setPotionsIcon(PotionsHover)}
          onMouseLeave={() => setPotionsIcon(PotionsRegular)}
        >
          <NavLink className="nav-link" to="/potions">
            <img className="nav-icon" src={potionsIcon} alt="Potions" />
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setHousesIcon(HousesHover)}
          onMouseLeave={() => setHousesIcon(HousesRegular)}
        >
          <NavLink className="nav-link" to="/houses">
            <img className="nav-icon" src={housesIcon} alt="Houses" />
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setSortingHatIcon(SortingHatHover)}
          onMouseLeave={() => setSortingHatIcon(SortingHatRegular)}
        >
          <NavLink className="nav-link" to="/sortingHat">
            <img className="nav-icon" src={sortingHatIcon} alt="Sorting Hat" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
