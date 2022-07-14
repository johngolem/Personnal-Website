import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUserAdd />
      </a>
      <a href="#experience">
        <FaGraduationCap />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <MdContacts />
      </a>
    </nav>
  );
};

export default Nav;
