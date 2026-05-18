import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/home.css";

const Home = () => {

  const navigate = useNavigate();

  /* =================================
     TYPEWRITER EFFECT
  ================================= */
  useEffect(() => {

    const textElement =
      document.querySelector(".typing-text");

    const words = [
      "FULL STACK DEVELOPER",
      "MERN STACK DEVELOPER"
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
        isDeleting ? 50 : 90;

      if (
        !isDeleting &&
        charIndex === currentWord.length
      ) {

        speed = 1200;
        isDeleting = true;

      } else if (
        isDeleting &&
        charIndex === 0
      ) {

        isDeleting = false;

        wordIndex =
          (wordIndex + 1) %
          words.length;

        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();

  }, []);

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

    <main
      id="home"
      className="home-wrapper"
    >

      <div className="home-content">

        {/* =========================
            HERO CARD
        ========================= */}

        <motion.div
          className="hero-card"

          initial={{
            opacity: 0,
            y: 60,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          {/* HUD */}
          <motion.div
            className="hud-top-left"

            initial={{
              opacity: 0,
              x: -20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.3,
            }}
          >

            <div className="hud-line"></div>

            <span>
              MARK_VII_CONNECTED
            </span>

          </motion.div>

          {/* TITLE */}
          <motion.h1
            className="hero-title"

            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >

            RAAJ <span>KUMAR</span>

          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            className="hero-subtitle"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
          >

            <span className="typing-text"></span>

          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="hero-description"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >

            Architecting digital systems
            with precision, performance,
            and advanced modular
            infrastructure.

          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-actions"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >

            <motion.button
              className="btn btn-primary-custom"

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.96,
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
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.96,
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
              x: 20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 1,
            }}
          >

            <span>
              KNOWLEDGE_LEVEL: 100%
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
                  delay: 1.1,
                  duration: 1,
                }}
              />

            </div>

          </motion.div>

        </motion.div>

        {/* =========================
            SKILLS SECTION
        ========================= */}

        <motion.section
          id="skills"
          className="home-skills"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.div
            className="skills-hud"
            variants={itemVariants}
          >

            SYSTEMS_OVERVIEW

          </motion.div>

          <motion.h2
            className="skills-title"
            variants={itemVariants}
          >

            CORE <span>SKILLS</span>

          </motion.h2>

          {/* SKILLS GRID */}
          <div className="skills-grid">

            {
              [
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "React-Router",
                "CRUD Operations",
                "O auth",
                "Git & GitHub"
              ].map((skill, index) => (

                <motion.div
                  key={index}

                  className="skill-box"

                  variants={itemVariants}

                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                >

                  {skill}

                </motion.div>

              ))
            }

          </div>

        </motion.section>

      </div>

    </main>

  );

};

export default Home;