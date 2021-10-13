import Project from "../Project";
import projects from "../../assets/resources/projects";

const Portfolio = () => {
  return (
    <section className="portfolio container">
      <h2 className="primary-section-title">// Portfolio //</h2>
      <ul className="portfolio-list">
        {projects.map((project) => (
          <li className="single-project" key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
