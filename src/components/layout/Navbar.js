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

import { motion } from "framer-motion";
import Modal from "./Modal";

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
      <motion.li className="nav-logo">
        <Link className="nav-link" to="/">
          <motion.img
            className="nav-img"
            src={HogwartsRegular}
            alt="Hogwarts"
          />
          <span className="nav-text">Harry Potter</span>
        </Link>
      </motion.li>
      <ul className="navbar-nav">
        <motion.li
          whileHover={{
            backgroundColor: "#3a3b3c",
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
          onHoverStart={(e) => {
            e.target.children[1].classList.remove("hide");
            setHomeTrainIcon(HomeHover);
          }}
          onHoverEnd={(e) => {
            e.target.children[1].classList.add("hide");
            setHomeTrainIcon(HomeRegular);
          }}
        >
          <NavLink className="nav-link active" to="/">
            <img
              className="nav-icon"
              src={homeTrainIcon}
              alt="Hogwarts Train"
            />
          </NavLink>
          <div className="modal-main hide">
            <Modal text="Home" />
          </div>
        </motion.li>

        <motion.li
          className="wizard-icon"
          whileHover={{
            backgroundColor: "#3a3b3c",
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
          onHoverStart={(e) => {
            e.target.children[1].classList.remove("hide");
            setWizardIcon(WizardsHover);
          }}
          onHoverEnd={(e) => {
            e.target.children[1].classList.add("hide");
            setWizardIcon(WizardsRegular);
          }}
        >
          <NavLink className="nav-link active" to="/wizards">
            <img className="nav-icon" src={wizardIcon} alt="Wizards" />
          </NavLink>
          <div className="modal-main hide">
            <Modal text="Wizards" />
          </div>
        </motion.li>
        <motion.li
          whileHover={{
            backgroundColor: "#3a3b3c",
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
          onHoverStart={(e) => {
            e.target.children[1].classList.remove("hide");
            setPotionsIcon(PotionsHover);
          }}
          onHoverEnd={(e) => {
            e.target.children[1].classList.add("hide");
            setPotionsIcon(PotionsRegular);
          }}
        >
          <NavLink className="nav-link" to="/potions">
            <img className="nav-icon" src={potionsIcon} alt="Potions" />
          </NavLink>
          <div className="modal-main hide">
            <Modal text="Potions" />
          </div>
        </motion.li>

        <motion.li
          whileHover={{
            backgroundColor: "#3a3b3c",
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
          onHoverStart={(e) => {
            e.target.children[1].classList.remove("hide");
            setHousesIcon(HousesHover);
          }}
          onHoverEnd={(e) => {
            e.target.children[1].classList.add("hide");
            setHousesIcon(HousesRegular);
          }}
        >
          <NavLink className="nav-link" to="/houses">
            <img className="nav-icon" src={housesIcon} alt="Houses" />
          </NavLink>
          <div className="modal-main hide">
            <Modal text="Houses" />
          </div>
        </motion.li>

        <motion.li
          whileHover={{
            backgroundColor: "#3a3b3c",
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
          onHoverStart={(e) => {
            e.target.children[1].classList.remove("hide");
            setSortingHatIcon(SortingHatHover);
          }}
          onHoverEnd={(e) => {
            e.target.children[1].classList.add("hide");
            setSortingHatIcon(SortingHatRegular);
          }}
        >
          <NavLink className="nav-link" to="/sortingHat">
            <img className="nav-icon" src={sortingHatIcon} alt="Sorting Hat" />
          </NavLink>
          <div className="modal-main hide">
            <Modal text="Sorting Hat" />
          </div>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
