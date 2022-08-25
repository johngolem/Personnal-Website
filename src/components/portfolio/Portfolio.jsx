import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.jpeg";
import IMG2 from "../../assets/image2.jpeg";
import IMG3 from "../../assets/image3.jpeg";
import IMG4 from "../../assets/images4.png";
import IMG5 from "../../assets/image5.jpeg";
import IMG6 from "../../assets/image6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Github Clone",
    github: "https://github.com/johngolem/github-copy",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Turaco",
    github: "https://github.com/johngolem/Turaco",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Apecoin",
    github: "https://github.com/johngolem/Apecoin",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quotes",
    github: "https://github.com/johngolem/Quotes",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Pitchsite",
    github: "https://github.com/johngolem/Pitchsite",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
  {
    id: 6,
    image: IMG6,
    title: "NewsFetch",
    github: "https://github.com/johngolem/NewsFetch",
    demo: "https://sahil-sharma.github.io/github-clone/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github Link
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
