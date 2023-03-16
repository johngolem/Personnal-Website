import React from "react";
import "./about.css";
import HERO from "../../assets/hero.jpeg";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h2>Services</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={HERO} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Search Property</h5>
              <small>3 + Years Working</small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Transfer Property</h5>
              <small>Several Clients worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Order A Title</h5>
              <small>60 + completed projects</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Order A Plan</h5>
              <small>60 + completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nihil sapiente aspernatur animi temporibus quibusdam earum ab ipsam
            iure architecto laboriosam, repellat explicabo? Neque ullam natus
            amet, quaerat voluptas omnis?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
