import React from "react";
import "./css/Navbar.css";
import Logo from "../images/Logo";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ toggleNavbarMenu }) => {
  return (
    <div className="Navbar">
      <Logo witdh={120} height={33} />
      <nav>
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#resources">Resources</a>
        <a href="/#login">Login</a>
        <Button>Sign Up</Button>
      </nav>
      <button
        className="Navbar__hamburgerMenu"
        onClick={() => {
          toggleNavbarMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

Navbar.propTypes = {
  toggleNavbarMenu: PropTypes.func.isRequired,
};

export default Navbar;
