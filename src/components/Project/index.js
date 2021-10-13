const Project = ({ project }) => {
    return (
        <section className="single-project">
            <img src={project.image} alt={project.imageDescription}></img>
            <a href={project.githubUrl}>GitHub Repository</a>
            <a href={project.deployedUrl}>Deployed Application</a>
            <div className="project-text">
                <span className="project-title">{project.title}</span>
                <p>{project.date}</p>
                <p>{project.description}</p>
            </div>
        </section>
    )
}

export default Project;