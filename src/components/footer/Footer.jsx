import React from "react";
import "./footer.css";
import { ImWhatsapp, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        John Paul
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="testimonials#">Testimonials</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com" target="_blank">
          <ImWhatsapp />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <ImTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JohnPaul.  All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
