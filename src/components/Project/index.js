import "./izmir.css";

const Project = ({ project }) => { 
  return (
    <section className="project-container">
      <figure
        className="c4-izmir c4-border-bottom-left c4-gradient-bottom-right"
        tabindex="0"
      >
        <img className="project-img"
          src={require(`../../assets/images/screenshot-${project.id}.PNG`).default}
          alt={project.imageDescription}
        />
        <figcaption className="c4-layout-bottom-left">
          <div className="c4-reveal-right c4-delay-100">
            <h3>{project.title}</h3>
            <a href={project.githubUrl}>GitHub Repository</a>
            <a href={project.deployedUrl}>Deployed Application</a>
            <div className="project-text">
              <span className="project-title">{project.title}</span>
              <p>{project.date}</p>
              <p>{project.description}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Project;
