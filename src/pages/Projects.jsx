import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
} from "react-icons/fa";

import "../styles/projects.css";

import { projects } from "../data/projects";

const Projects = () => {

  return (

    <main className="projects-wrapper">

      {/* =================================
          BACKGROUND ELEMENTS
      ================================= */}

      <div className="projects-grid-overlay"></div>

      <div className="projects-orb orb-one"></div>

      <div className="projects-orb orb-two"></div>

      {/* =================================
          PAGE HEADER
      ================================= */}

      <motion.section

        className="projects-hero"

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        <div className="hero-line"></div>

        <span className="hero-label">

          SYSTEMS_OVERVIEW

        </span>

        <h1 className="projects-title">

          PROJECT <span>DEPLOYMENTS</span>

        </h1>

        <p className="projects-subtitle">

          Advanced frontend systems,
          cinematic user interfaces,
          scalable architecture, and
          futuristic development
          deployments crafted with
          precision.

        </p>

      </motion.section>

      {/* =================================
          PROJECT GRID
      ================================= */}

      <div className="projects-grid">

        {
          projects.map((project, index) => (

            <motion.div

              key={index}

              className="project-card"

              initial={{
                opacity: 0,
                y: 50,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              whileHover={{
                y: -10,
              }}
            >

              {/* SHINE */}

              <div className="card-shine"></div>

              {/* GLOW */}

              <div className="project-orb-card"></div>

              {/* =================================
                  TOP BAR
              ================================= */}

              <div className="project-top">

                <div className="project-number">

                  <FaCodeBranch />

                  <span>

                    {project.id}

                  </span>

                </div>

                <span
                  className={`project-status ${project.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >

                  {project.status}

                </span>

              </div>

              {/* =================================
                  CATEGORY
              ================================= */}

              <p className="project-category">

                {project.category}

              </p>

              {/* =================================
                  TITLE
              ================================= */}

              <h2 className="project-name">

                {project.title}

              </h2>

              {/* =================================
                  DESCRIPTION
              ================================= */}

              <p className="project-desc">

                {project.description}

              </p>

              {/* =================================
                  TECH STACK
              ================================= */}

              <div className="tech-stack">

                {
                  project.tech.map(
                    (tech, i) => (

                      <span
                        key={i}
                        className="tech-badge"
                      >

                        {tech}

                      </span>

                    )
                  )
                }

              </div>

              {/* =================================
                  ACTION BUTTONS
              ================================= */}

              <div className="project-actions">

                {/* GITHUB */}

                <motion.a

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                  className="btn-outline"

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}
                >

                  <FaGithub />

                  GitHub

                </motion.a>

                {/* LIVE */}

                {
                  project.live && (

                    <motion.a

                      href={project.live}

                      target="_blank"

                      rel="noreferrer"

                      className="btn-primary"

                      whileHover={{
                        scale: 1.05,
                      }}

                      whileTap={{
                        scale: 0.95,
                      }}
                    >

                      <FaExternalLinkAlt />

                      Live

                    </motion.a>

                  )
                }

              </div>

            </motion.div>

          ))
        }

      </div>

    </main>

  );

};

export default Projects;