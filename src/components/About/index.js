import React from 'react';
import headshot from '../../assets/images/mb_small.png';

const About = () => {
  return (
    <section className="flex-row about-container">
        <h2 className="primary-section-title">// About Me //</h2>
      <section className="flex-row section-info about-info">
        <section className="bio-img">
          <img
            src={headshot}
            alt="Official headshot of Meghan Bock"
          />
        </section>
        <section className="bio-text">
          <p>
            Meghan Bock works as a Solution Architect for Salesforce-based
            applications. Her work focuses primarily on designing and
            implementing customer relationship management and program management
            systems for water, gas, and electric utilities across the United
            States and Canada. To supplement her work as a Solution Architect,
            Meghan is pursuing advanced learning in full stack development at
            the University of Texas.
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
