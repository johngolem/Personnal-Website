import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profile pic.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="intro__container">
          <h5>Hello I'm</h5>
          <h1>John Paul</h1>
          <h5>Fullstack Developer</h5>
        </div>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Image of john paul" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
