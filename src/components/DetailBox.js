import React from "react";
import "./css/DetailBox.css";
import PropTypes from "prop-types";

const DetailBox = ({ children }) => {
  return <div className="DetailBox">{children}</div>;
};

DetailBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailBox;
