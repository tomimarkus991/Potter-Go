import React from "react";
import { Navbar as Navbar2, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HOGWARTS_ICON,
  WIZARDS_ICON,
  POTIONS_ICON,
  HOUSES_ICON,
  SORTING_HAT_ICON,
} from "../../assets/icons/icons";

const Navbar = () => {
  return (
    <Navbar2
      style={{ backgroundColor: "#242526", color: "#E4E6EB" }}
      expand="lg"
    >
      <Navbar2.Brand href="/" style={{ color: "#E4E6EB" }}>
        <img src={HOGWARTS_ICON} alt="Hogwarts" style={{ width: "5em" }} />{" "}
        Harry Potter
      </Navbar2.Brand>
      <Navbar2.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar2.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wizards">
                <img
                  src={WIZARDS_ICON}
                  alt="WIZARDS"
                  style={{ width: "4em" }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/potions">
                <img
                  src={POTIONS_ICON}
                  alt="POTIONS"
                  style={{ width: "4em" }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/houses">
                <img src={HOUSES_ICON} alt="HOUSES" style={{ width: "4em" }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sortingHat">
                <img
                  src={SORTING_HAT_ICON}
                  alt="SORTING HAT"
                  style={{ width: "4em" }}
                />
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar2.Collapse>
    </Navbar2>
  );
};

export default Navbar;
