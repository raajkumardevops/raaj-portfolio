import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../styles/projects.css";
import { projects } from "../data/projects";

const Projects = () => {

  /* =================================
     FRAMER VARIANTS
  ================================= */

  const containerVariants = {

    hidden: {},

    visible: {

      transition: {
        staggerChildren: 0.12,
      },

    },

  };

  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 60,
    },

    visible: {

      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },

    },

  };

  return (

    <main className="projects-wrapper">

      {/* =========================
          PAGE TITLE
      ========================= */}

      <motion.h1
        className="projects-title"

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        PROJECT <span>DEPLOYMENTS</span>

      </motion.h1>

      {/* =========================
          PROJECT GRID
      ========================= */}

      <motion.div
        className="projects-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}
      >

        {
          projects.map((project, index) => (

            <motion.div
              key={index}

              className="project-card"

              variants={itemVariants}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >

              {/* GLOW ORB */}
              <div className="project-orb"></div>

              {/* TOP SECTION */}
              <div className="project-top">

                <span className="project-id">
                  {project.id}
                </span>

                <span
                  className={`project-status ${project.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {project.status}
                </span>

              </div>

              {/* CATEGORY */}
              <p className="project-category">
                {project.category}
              </p>

              {/* TITLE */}
              <h2 className="project-name">
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="project-desc">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="tech-stack">

                {
                  project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="tech-badge"
                    >
                      {tech}
                    </span>

                  ))
                }

              </div>

              {/* ACTION BUTTONS */}
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
                {/* <motion.a
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

                </motion.a> */}

              </div>

            </motion.div>

          ))
        }

      </motion.div>

    </main>

  );

};

export default Projects;