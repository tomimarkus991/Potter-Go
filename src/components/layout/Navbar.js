import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HogwartsRegular,
  HomeRegular,
  WizardsRegular,
  PotionsRegular,
  HousesRegular,
  SortingHatRegular,
} from "../../assets/icons/navbarRegular/NavbarRegular";

import { WizardsHover } from "../../assets/icons/navbarHover/NavbarHover";
import { WizardsActive } from "../../assets/icons/navbarActive/NavbarActive";

const Navbar = () => {
  const [wizardIcon, setWizardIcon] = useState(WizardsRegular);
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
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          <img className="nav-img" src={HogwartsRegular} alt="Hogwarts" />
          <span className="nav-text">Harry Potter</span>
        </NavLink>
      </li>
      <ul className="navbar-nav">
        <li>
          <NavLink className="nav-link" to="/">
            <img className="nav-icon" src={HomeRegular} alt="Hogwarts Train" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/wizards"
            onClick={(e) => {
              if (
                e.target.parentElement.classList.contains("active") ||
                e.target.classList.contains("active")
              ) {
                setWizardIcon(WizardsActive);
              }
            }}
          >
            <img
              className="nav-icon"
              src={wizardIcon}
              alt="Wizards"
              onMouseEnter={() => setWizardIcon(WizardsHover)}
              onMouseLeave={() => {
                if (wizardIcon !== WizardsActive) {
                  setWizardIcon(WizardsRegular);
                }
              }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/potions">
            <img className="nav-icon" src={PotionsRegular} alt="Potions" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/houses">
            <img className="nav-icon" src={HousesRegular} alt="Houses" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/sortingHat">
            <img
              className="nav-icon"
              src={SortingHatRegular}
              alt="Sorting Hat"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
