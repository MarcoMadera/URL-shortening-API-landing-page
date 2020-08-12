import React from "react";
import "./css/Footer.css";
import Logo from "../images/Logo";
import Facebook from "../images/Facebook";
import Twitter from "../images/Twitter";
import Pinterest from "../images/Pinterest";
import Instagram from "../images/Instagram";

const Footer = () => {
  return (
    <footer className="Footer">
      <Logo fill="rgb(255,255,255)" witdh={120} height={33} />
      <div className="Features">
        <h6>Features</h6>
        <a href="/#linkshorter">Link Shortening</a>
        <a href="/#brandedlinks">Branded Links</a>
        <a href="/#analytics">Analytics</a>
      </div>
      <div className="Resources">
        <h6>Resources</h6>
        <a href="/#resources">Blog</a>
        <a href="/#developers">Developers</a>
        <a href="/#support">Support</a>
      </div>
      <div className="Company">
        <h6>Company</h6>
        <a href="/#about">About</a>
        <a href="/#outteam">Our Team</a>
        <a href="/#careers">Careers</a>
        <a href="/#contact">Contact</a>
      </div>
      <div className="Footer__icons">
        <Facebook witdh={20} height={20} />
        <Twitter witdh={20} height={20} />
        <Pinterest witdh={20} height={20} />
        <Instagram witdh={20} height={20} />
      </div>
    </footer>
  );
};

export default Footer;
