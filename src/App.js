import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Details from "./components/Details";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [isOpenNavbarMenu, setIsopenNavbarMenu] = useState(false);
  const toggleNavbarMenu = () => {
    setIsopenNavbarMenu(!isOpenNavbarMenu);
  };
  const closeNavbarMenu = () => {
    setIsopenNavbarMenu(false);
  };
  return (
    <Fragment>
      <Modal
        isOpenNavbarMenu={isOpenNavbarMenu}
        closeNavbarMenu={closeNavbarMenu}
      />
      <Navbar toggleNavbarMenu={toggleNavbarMenu} />
      <Hero />
      <Shortener />
      <Details />
      <Promo />
      <Footer />
    </Fragment>
  );
};

export default App;
