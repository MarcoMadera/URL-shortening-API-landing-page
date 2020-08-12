import React from "react";
import "./css/Navbar.css";
import Logo from "../images/Logo";
import Button from "./Button";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
