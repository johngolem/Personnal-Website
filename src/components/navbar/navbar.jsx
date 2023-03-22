import React from "react";
import "./navbar.css";

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
