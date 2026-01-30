import "../styles/projects.css";

const projects = [
  {
    title: "TaskMaster",
    tech: "MERN Stack",
    desc: "A productivity and habit tracking system with authentication, roles, and analytics.",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio OS",
    tech: "React + CSS",
    desc: "Stark-inspired professional portfolio with futuristic UI and responsive design.",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    tech: "MERN Stack",
    desc: "Full-stack e-commerce app with admin dashboard, orders, and payments.",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div className="projects-header">
        <span className="projects-tag">DEPLOYMENTS</span>
        <h1>
          ACTIVE <span>PROJECTS</span>
        </h1>
        <p>Production-ready systems built with scalable architecture.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <span className="project-tech">{project.tech}</span>
            <p>{project.desc}</p>

            <div className="project-actions">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
