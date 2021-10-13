import Project from "../Project";
import projects from "../../assets/projects.js";

const Portfolio = () => {
  return (
    <section className="portfolio container">
      <span className="sub-heading">
        <h2>Portfolio</h2>
      </span>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
