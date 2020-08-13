import React from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";
import Button from "./Button";

function Modal({ isOpenNavbarMenu, closeNavbarMenu }) {
  const modal = (
    <div className="modal__container">
      <div
        className={!isOpenNavbarMenu && "hide"}
        aria-checked={isOpenNavbarMenu}
        tabIndex="0"
        onClick={() => closeNavbarMenu()}
        role="switch"
        onKeyDown={(e) => e.keyCode === 27 && closeNavbarMenu()}
      />
      <div className={isOpenNavbarMenu ? "modal" : "hide"}>
        <div className="modal__container__links">
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#resources">Resources</a>
          <hr />
          <a href="/#login">Login</a>
          <Button width={100}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
