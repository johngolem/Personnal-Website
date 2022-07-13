import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/jp.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Paul</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
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
