import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaLayerGroup,
  FaCode,
  FaRocket,
  FaTools,
} from "react-icons/fa";

import skillsData from "../data/skillsData";

import "../styles/skillDetails.css";

const SkillDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  /* =================================
     FIND SKILL
  ================================= */

  const skill =
    skillsData.find(
      (item) => item.id === id
    );

  /* =================================
     IF NOT FOUND
  ================================= */

  if (!skill) {

    return (

      <div className="skill-not-found">

        <h1>
          Skill Not Found
        </h1>

        <button
          onClick={() =>
            navigate("/")
          }
        >

          Go Back

        </button>

      </div>

    );

  }

  return (

    <main className="skill-details-page">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="details-grid"></div>

      <div className="details-orb orb-one"></div>

      <div className="details-orb orb-two"></div>

      {/* =================================
          HERO
      ================================= */}

      <motion.section

        className="details-hero"

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

        {/* BACK BUTTON */}

        <motion.button

          className="back-btn"

          whileHover={{
            x: -4,
          }}

          whileTap={{
            scale: 0.95,
          }}

          onClick={() =>
            navigate("/")
          }
        >

          <FaArrowLeft />

          Back Home

        </motion.button>

        {/* SKILL ICON */}

        <motion.div

          className="details-icon"

          initial={{
            scale: 0,
            rotate: -30,
          }}

          animate={{
            scale: 1,
            rotate: 0,
          }}

          transition={{
            delay: 0.2,
            type: "spring",
          }}

          style={{
            color: skill.color,
          }}
        >

          {skill.icon}

        </motion.div>

        {/* TITLE */}

        <motion.h1

          className="details-title"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.3,
          }}
        >

          {skill.title}

        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p

          className="details-subtitle"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.5,
          }}
        >

          {skill.shortDesc}

        </motion.p>

      </motion.section>

      {/* =================================
          CONTENT GRID
      ================================= */}

      <section className="details-content">

        {/* WHAT IS */}

        <motion.div

          className="details-card"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <div className="card-top">

            <FaLayerGroup />

            <span>
              WHAT IS {skill.title}
            </span>

          </div>

          <p>

            {skill.whatIs}

          </p>

        </motion.div>

        {/* WHY USE */}

        <motion.div

          className="details-card"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.1,
          }}
        >

          <div className="card-top">

            <FaCode />

            <span>
              WHY WE USE IT
            </span>

          </div>

          <p>

            {skill.whyUse}

          </p>

        </motion.div>

        {/* HOW RAAJ USES */}

        <motion.div

          className="details-card"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.2,
          }}
        >

          <div className="card-top">

            <FaRocket />

            <span>
              HOW RAAJ USES IT
            </span>

          </div>

          <p>

            {skill.howRaajUses}

          </p>

        </motion.div>

        {/* TOOLS */}

        <motion.div

          className="details-card"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.3,
          }}
        >

          <div className="card-top">

            <FaTools />

            <span>
              TOOLS & ECOSYSTEM
            </span>

          </div>

          <div className="tools-list">

            {
              skill.tools.map(
                (tool, index) => (

                  <div
                    key={index}
                    className="tool-pill"
                  >

                    {tool}

                  </div>

                )
              )
            }

          </div>

        </motion.div>

      </section>

      {/* =================================
          PROJECTS
      ================================= */}

      <motion.section

        className="projects-section"

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="section-header">

          PROJECTS USING {skill.title}

        </div>

        <div className="projects-grid">

          {
            skill.projects.map(
              (project, index) => (

                <motion.div

                  key={index}

                  className="project-card"

                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="project-number">

                    0{index + 1}

                  </div>

                  <h3>

                    {project}

                  </h3>

                  <p>

                    Advanced system
                    architecture built
                    using {skill.title}.

                  </p>

                </motion.div>

              )
            )
          }

        </div>

      </motion.section>

      {/* =================================
          EXPERIENCE
      ================================= */}

      <motion.section

        className="experience-section"

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="experience-card">

          <h2>

            EXPERIENCE LEVEL

          </h2>

          <p>

            {skill.experience}

          </p>

          <div className="experience-bar">

            <motion.div

              className="experience-fill"

              initial={{
                width: 0,
              }}

              whileInView={{
                width: "92%",
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 1.2,
              }}
            />

          </div>

        </div>

      </motion.section>

    </main>

  );

};

export default SkillDetails;