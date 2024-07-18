import React from "react";
import "./Homepage.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Hello, I'm [Your Name]</h1>
        <p>I'm a [Your Profession] with a passion for [Your Passion].</p>
        <button className="cta-button">View My Work</button>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
