import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/john-paul-739a84136" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/johngolem" target="_blank">
        <ImGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
