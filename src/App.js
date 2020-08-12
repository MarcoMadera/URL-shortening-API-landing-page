import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Details from "./components/Details";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shortener />
      <Details />
      <Promo />
      <Footer />
    </>
  );
};

export default App;
