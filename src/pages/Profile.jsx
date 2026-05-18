import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/profile.css";
import profileImg from "../assets/professionalPhotoFinal.jpg";

const Profile = () => {

  const [showImage, setShowImage] = useState(false);

  /* =================================
     FRAMER VARIANTS
  ================================= */

  const containerVariants = {

    hidden: {},

    visible: {

      transition: {
        staggerChildren: 0.18,
      },

    },

  };

  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 50,
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

    <main className="profile-wrapper">

      {/* =========================
          PROFILE CARD
      ========================= */}

      <motion.section
        className="profile-card"

        variants={containerVariants}

        initial="hidden"

        animate="visible"
      >

        {/* =========================
            HUD
        ========================= */}

        <motion.div
          className="profile-hud"

          variants={itemVariants}
        >

          <div className="hud-line"></div>

          <span>
            PROFILE_MODULE_ACTIVE
          </span>

        </motion.div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="profile-content">

          {/* =========================
              IMAGE
          ========================= */}

          <motion.div
            className="profile-image"

            variants={itemVariants}

            whileHover={{
              scale: 1.03,
            }}
          >

            <img
              src={profileImg}
              alt="Profile"

              onClick={() =>
                setShowImage(true)
              }
            />

          </motion.div>

          {/* =========================
              TEXT
          ========================= */}

          <motion.div
            className="profile-text"

            variants={itemVariants}
          >

            <motion.h1
              className="profile-title"

              variants={itemVariants}
            >

              PROFILE <span>PAGE</span>

            </motion.h1>

            <motion.h2
              className="profile-subtitle"

              variants={itemVariants}
            >

              FULL STACK / MERN DEVELOPER

            </motion.h2>

            <motion.p
              className="profile-description"

              variants={itemVariants}
            >

              I am a passionate Full Stack Developer focused on building
              scalable, efficient, and user-centric applications.

            </motion.p>

            <motion.p
              className="profile-description"

              variants={itemVariants}
            >

              My goal is to continuously improve my skills, build
              real-world projects, and deliver reliable,
              future-ready solutions.

            </motion.p>

            {/* =========================
                STATS
            ========================= */}

            <motion.div
              className="profile-stats"

              variants={containerVariants}
            >

              {/* PROJECTS */}
              <motion.div
                className="stat-box"

                variants={itemVariants}

                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >

                <span className="stat-value">
                  10+
                </span>

                <span className="stat-label">
                  Projects
                </span>

              </motion.div>

              {/* STACK */}
              <motion.div
                className="stat-box"

                variants={itemVariants}

                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >

                <span className="stat-value">
                  MERN
                </span>

                <span className="stat-label">
                  Stack
                </span>

              </motion.div>

              {/* LEARNING */}
              <motion.div
                className="stat-box"

                variants={itemVariants}

                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >

                <span className="stat-value">
                  ∞
                </span>

                <span className="stat-label">
                  Learning
                </span>

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </motion.section>

      {/* =========================
          IMAGE MODAL
      ========================= */}

      <AnimatePresence>

        {
          showImage && (

            <motion.div
              className="image-modal"

              onClick={() =>
                setShowImage(false)
              }

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}
            >

              <motion.img
                src={profileImg}

                alt="Full Profile"

                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}

                animate={{
                  scale: 1,
                  opacity: 1,
                }}

                exit={{
                  scale: 0.7,
                  opacity: 0,
                }}

                transition={{
                  duration: 0.35,
                }}
              />

            </motion.div>

          )
        }

      </AnimatePresence>

    </main>

  );

};

export default Profile;