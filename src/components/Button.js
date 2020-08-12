import React from "react";
import "./css/Button.css";
import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <a href={`/#${children}`} className="Button">
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
