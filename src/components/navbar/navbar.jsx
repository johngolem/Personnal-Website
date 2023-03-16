import React from "react";
import "./navbar.css";
import { ImWhatsapp, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import logo from "../../assets/logoNy.png";

const Navbar = () => {
  return (
    <navbar>
      {/* <a href="#" className="navbar__logo">
        Nyamira Lands
        <img src={logo} width={200} height={200}></img>
      </a> */}
      <h1 className="webname">Nyamira Department of Lands</h1>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#fags">FAQs</a>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
