import React from "react";
import "./css/Button.css";
import PropTypes from "prop-types";

const Button = ({ children, width }) => {
  return (
    <a
      href={`/#${children}`}
      style={{ width: width ? `${width}%` : "fit-content" }}
      className="Button"
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
};

export default Button;
