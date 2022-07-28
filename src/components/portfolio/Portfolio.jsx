import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pexels-rahul.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          {/* <div className="portfolio__item-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            soluta consequatur doloribus ut eaque dicta saepe dolore? Optio
            aspernatur explicabo error et dolorum! Facilis, assumenda. Similique
            impedit qui blanditiis perferendis.
          </div> */}
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portolio image 1" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="https://github.com" className="btn">
            Github Link
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
