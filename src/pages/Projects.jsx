import { useEffect } from "react";
import "../styles/projects.css";
import { projects } from "../data/projects";

const Projects = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="projects-wrapper">

      {/* TITLE */}
      <h1 className="projects-title reveal">
        PROJECT <span>DEPLOYMENTS</span>
      </h1>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card reveal delay-${(index % 3) + 1}`}
            key={index}
          >
            <h2 className="project-name">
              {project.title}
            </h2>

            <p className="project-desc">
              {project.description}
            </p>

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
