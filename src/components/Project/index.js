require('../../assets/styles/izmir.css');

const Project = ({ project }) => { 
  return (
    <section className="project-container">
      <figure
        className="c4-izmir c4-border-bottom-left c4-gradient-bottom-right"
        tabindex="0"
      >
        <img className="project-img"
          src={require(`../../assets/images/screenshot-${project.key}.PNG`).default}
          alt={project.imageDescription}
        />
        <figcaption className="c4-layout-bottom-left">
          <div className="c4-reveal-right c4-delay-100">
            <h2>{project.title}</h2>
            <div className="project-text">
            <p><span>Links: </span><a href={project.githubUrl} target="_blank">GitHub Repository</a> // <a href={project.deployedUrl} target="_blank">Deployed Application</a></p>
              <p><span>Languages/Tools:</span> {project.languages}</p>
              <p><span>Description:</span> {project.description}</p>
              <p><span>Date:</span> {project.date}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Project;
