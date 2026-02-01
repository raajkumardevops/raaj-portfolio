import "../styles/projects.css";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <main className="projects-wrapper">
      <h1 className="projects-title">
        PROJECT <span>DEPLOYMENTS</span>
      </h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h2 className="project-name">{project.title}</h2>

            <p className="project-desc">{project.description}</p>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
