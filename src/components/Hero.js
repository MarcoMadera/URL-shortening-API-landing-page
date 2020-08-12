import React from "react";
import "./css/Hero.css";
import IllustrationWorking from "../images/IllustrationWorking";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="Hero">
      <IllustrationWorking />
      <h1 className="Hero__title">More than just shorter links</h1>
      <p className="Hero__excerpt">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Hero;
