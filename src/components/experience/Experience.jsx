import React from "react";
import "./experience.css";
import { BsStack } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Rest API</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Angular</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Django</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Nodejs</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Laravel</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Docker</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Kubernetes</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Postgres SQL</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsStack />
              <div>
                <h4>Flutter</h4>
                <small>Experienced</small>
              </div>
            </article>
            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
