import React from "react";
import "./css/DetailBox.css";
import PropTypes from "prop-types";

const DetailBox = ({ children, title, desc }) => {
  return (
    <div className="DetailBox">
      <div className="DetailBox__img">{children}</div>
      <h4 className="DetailBox__title">{title}</h4>
      <p className="DetailBox__desc">{desc}</p>
    </div>
  );
};

DetailBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default DetailBox;
