import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRocket,
  FaCircle,
  FaCode,
} from "react-icons/fa";

import { SiFirebase } from "react-icons/si";

import "../styles/home.css";

import skillsData from "../data/skillsData";

const Home = () => {

  const navigate = useNavigate();

  /* =================================
     TYPEWRITER EFFECT
  ================================= */

  useEffect(() => {

    const textElement =
      document.querySelector(
        ".typing-text"
      );

    const words = [

      "FULL STACK DEVELOPER",

      "MERN STACK ENGINEER",

      "FUTURISTIC UI DESIGNER",

      "FIREBASE ARCHITECT",

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    function typeEffect() {

      if (!textElement) return;

      const currentWord =
        words[wordIndex];

      if (!isDeleting) {

        textElement.textContent =
          currentWord.substring(
            0,
            charIndex + 1
          );

        charIndex++;

      } else {

        textElement.textContent =
          currentWord.substring(
            0,
            charIndex - 1
          );

        charIndex--;

      }

      let speed =
        isDeleting ? 40 : 80;

      if (
        !isDeleting &&
        charIndex ===
          currentWord.length
      ) {

        speed = 1400;

        isDeleting = true;

      } else if (
        isDeleting &&
        charIndex === 0
      ) {

        isDeleting = false;

        wordIndex =
          (wordIndex + 1) %
          words.length;

        speed = 300;

      }

      setTimeout(
        typeEffect,
        speed
      );

    }

    typeEffect();

  }, []);

  /* =================================
     FRAMER VARIANTS
  ================================= */

  const cardVariant = {

    hidden: {

      opacity: 0,
      y: 40,

    },

    visible: {

      opacity: 1,
      y: 0,

      transition: {

        duration: 0.7,
        ease: "easeOut",

      },

    },

  };

  return (

    <main
      id="home"
      className="home-wrapper"
    >

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="bg-orb orb-1"></div>

      <div className="bg-orb orb-2"></div>

      <div className="grid-overlay"></div>

      {/* =================================
          MAIN LAYOUT
      ================================= */}

      <div className="home-layout">

        {/* =================================
            HERO SECTION
        ================================= */}

        <motion.div

          className="hero-card"

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

          {/* SCAN LINE */}

          <div className="scan-line"></div>

          {/* HERO GLOW */}

          <div className="hero-glow"></div>

          {/* GRID */}

          <div className="hero-grid"></div>

          {/* HUD */}

          <div className="hud-top-left">

            <div className="hud-line"></div>

            <span>
              MARK_VII_CONNECTED
            </span>

          </div>

          {/* HERO TITLE */}

          <motion.h1

            className="hero-title"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}
          >

            RAAJ <span>KUMAR</span>

          </motion.h1>

          {/* SUBTITLE */}

          <motion.h2

            className="hero-subtitle"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.4,
            }}
          >

            <span className="typing-text"></span>

          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p

            className="hero-description"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
            }}
          >

            Architecting digital
            systems with precision,
            scalable infrastructure,
            and cinematic user
            experiences for modern
            web ecosystems.

          </motion.p>

          {/* TECH TAGS */}

          <motion.div

            className="floating-tech"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.8,
            }}
          >

            <span className="tech-pill">
              React
            </span>

            <span className="tech-pill">
              MERN
            </span>

            <span className="tech-pill">
              Firebase
            </span>

            <span className="tech-pill">
              UI / UX
            </span>

          </motion.div>

          {/* BUTTONS */}

          <motion.div

            className="hero-actions"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
            }}
          >

            <motion.button

              className="btn btn-primary-custom"

              whileHover={{
                scale: 1.04,
                y: -3,
              }}

              whileTap={{
                scale: 0.95,
              }}

              onClick={() =>
                navigate("/projects")
              }
            >

              Initialize Projects

            </motion.button>

            <motion.button

              className="btn btn-outline-custom"

              whileHover={{
                scale: 1.04,
                y: -3,
              }}

              whileTap={{
                scale: 0.95,
              }}

              onClick={() =>
                navigate("/profile")
              }
            >

              Technical Briefing

            </motion.button>

          </motion.div>

          {/* HUD BOTTOM */}

          <motion.div

            className="hud-bottom-right"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1.2,
            }}
          >

            <span>
              KNOWLEDGE_LEVEL:
              100%
            </span>

            <div className="power-bar">

              <motion.div

                className="power-fill"

                initial={{
                  width: 0,
                }}

                animate={{
                  width: "100%",
                }}

                transition={{
                  delay: 1.3,
                  duration: 1.2,
                }}
              />

            </div>

          </motion.div>

        </motion.div>

        {/* =================================
            RIGHT INFO CARDS
        ================================= */}

        <div className="right-cards">

          {/* CARD 1 */}

          <motion.div

            className="info-card"

            variants={cardVariant}

            initial="hidden"

            animate="visible"

            whileHover={{
              y: -6,
            }}
          >

            <div className="card-shine"></div>

            <div className="info-top">

              <FaCircle className="status-icon" />

              <span>
                SYSTEM STATUS
              </span>

            </div>

            <h3>
              All Systems Online
            </h3>

            <p>
              Available for
              freelance projects and
              startup collaborations.
            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div

            className="info-card"

            variants={cardVariant}

            initial="hidden"

            animate="visible"

            transition={{
              delay: 0.15,
            }}

            whileHover={{
              y: -6,
            }}
          >

            <div className="card-shine"></div>

            <div className="info-top">

              <FaReact className="react-icon" />

              <span>
                CURRENT STACK
              </span>

            </div>

            <div className="stack-list">

              <div>
                <FaReact />
                React
              </div>

              <div>
                <FaNodeJs />
                Node.js
              </div>

              <div>
                <FaDatabase />
                MongoDB
              </div>

              <div>
                <SiFirebase />
                Firebase
              </div>

            </div>

          </motion.div>

          {/* CARD 3 */}

          <motion.div

            className="info-card"

            variants={cardVariant}

            initial="hidden"

            animate="visible"

            transition={{
              delay: 0.3,
            }}

            whileHover={{
              y: -6,
            }}
          >

            <div className="card-shine"></div>

            <div className="info-top">

              <FaCode className="project-icon" />

              <span>
                PROJECT STATUS
              </span>

            </div>

            <div className="project-data">

              <h2>
                10+
              </h2>

              <p>
                Modern Full Stack
                Projects Successfully
                Developed & Deployed.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* =================================
          SKILLS SECTION
      ================================= */}

      <motion.section

        className="home-skills"

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

        transition={{
          duration: 0.8,
        }}
      >

        <div className="skills-hud">

          SYSTEMS_OVERVIEW

        </div>

        <h2 className="skills-title">

          CORE <span>SKILLS</span>

        </h2>

        <div className="skills-grid">

            {
              skillsData.map((skill, index) => (

                <motion.div

                  key={index}

                  className="skill-card"

                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  onClick={() =>
                    navigate(
                      `/skills/${skill.id}`
                    )
                  }
                >

                  {/* GLOW */}

                  <div className="skill-card-glow"></div>

                  {/* ICON */}

                <div
                  className="skill-icon"
                  style={{
                    color: skill.color,
                  }}
                >

                  {skill.icon}

                </div>

                {/* TITLE */}

                <h3>

                  {skill.title}

                </h3>

                {/* DESCRIPTION */}

                <p>

                  {skill.shortDesc}

                </p>

                {/* BUTTON */}

                <div className="skill-link">

                  Explore Technology →

                </div>

              </motion.div>

            ))
          }

        </div>

      </motion.section>

    </main>

  );

};

export default Home;