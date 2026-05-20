import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaTimes,
  FaQuoteLeft,
  FaCircle,
} from "react-icons/fa";

import "../styles/profile.css";

import profileImg from "../assets/professionalPhotoFinal.jpg";

const testimonials = [

  {
    company: "HEXA WEB SYSTEMS",

    role: "Startup Client",

    feedback:
      "Raaj delivered a futuristic frontend experience with premium UI systems, smooth responsiveness, and strong architectural thinking.",

    name: "Naveen",
  },

  {
    company: "ML TRADERS",

    role: "Business Owner",

    feedback:
      "The deployment quality and cinematic UI design exceeded expectations. Very professional and modern implementation.",

    name: "Venkatesh",
  },

  {
    company: "AGLET DANCE STUDIO",

    role: "Creative Team",

    feedback:
      "Exceptional frontend execution with stylish animations, responsive layouts, and modern interaction systems.",

    name: "Kishore",
  },

  {
    company: "KrizAwsDba",

    role: "Client Feedback",

    feedback:
      "Very passionate developer with strong problem-solving ability and futuristic UI creativity.",

    name: "Krishnan thiruvengadam",
  },

];

const Profile = () => {

  const [showImage, setShowImage] =
    useState(false);

  const [activeTestimonial,
    setActiveTestimonial] =
    useState(null);

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

      {/* =================================
          BACKGROUND EFFECTS
      ================================= */}

      <div className="profile-grid"></div>

      <div className="profile-orb orb-one"></div>

      <div className="profile-orb orb-two"></div>

      {/* =================================
          PROFILE CARD
      ================================= */}

      <motion.section

        className="profile-card"

        variants={containerVariants}

        initial="hidden"

        animate="visible"
      >

        {/* SCANLINE */}

        <div className="profile-scanline"></div>

        {/* =================================
            HUD
        ================================= */}

        <motion.div
          className="profile-hud"

          variants={itemVariants}
        >

          <div className="hud-line"></div>

          <span>

            PROFILE_MODULE_ACTIVE

          </span>

        </motion.div>

        {/* =================================
            STATUS CHIP
        ================================= */}

        <motion.div

          className="profile-status"

          initial={{
            opacity: 0,
            x: 30,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}
        >

          <FaCircle />

          AVAILABLE FOR WORK

        </motion.div>

        {/* =================================
            CONTENT
        ================================= */}

        <div className="profile-content">

          {/* =================================
              IMAGE
          ================================= */}

          <motion.div

            className="profile-image"

            variants={itemVariants}

            whileHover={{
              scale: 1.03,
            }}
          >

            <div className="image-glow"></div>

            <img
              src={profileImg}
              alt="Profile"

              onClick={() =>
                setShowImage(true)
              }
            />

          </motion.div>

          {/* =================================
              TEXT
          ================================= */}

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

            {/* =================================
                TECH PILLS
            ================================= */}

            <motion.div
              className="profile-tech-pills"

              variants={containerVariants}
            >

              {
                [
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Firebase",
                  "Framer Motion",
                ].map((tech, index) => (

                  <motion.span

                    key={index}

                    className="tech-pill"

                    variants={itemVariants}

                    whileHover={{
                      y: -4,
                    }}
                  >

                    {tech}

                  </motion.span>

                ))
              }

            </motion.div>

            {/* =================================
                STATS
            ================================= */}

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

      {/* =================================
          TESTIMONIAL SECTION
      ================================= */}

      <section className="testimonial-section">

        <div className="testimonial-header">

          CLIENT_FEEDBACK_SYSTEM

        </div>

        {/* =================================
            MARQUEE
        ================================= */}

<div className="testimonial-track">

  {
    [...testimonials,
    ...testimonials].map(
      (item, index) => (

        <motion.div

          key={index}

          className="testimonial-card"

          whileHover={{
            y: -10,
            scale: 1.03,
          }}

          onClick={() =>
            setActiveTestimonial(item)
          }
        >

          <div className="testimonial-shine"></div>

          <FaQuoteLeft className="quote-icon" />

          <h3>
            {item.company}
          </h3>

          <p>
            {item.feedback}
          </p>

          <span>
            — {item.name}
          </span>

        </motion.div>

      )
    )
  }

</div>

      </section>

      {/* =================================
          IMAGE MODAL
      ================================= */}

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

      {/* =================================
          TESTIMONIAL POPUP
      ================================= */}

      <AnimatePresence>

        {
          activeTestimonial && (

            <motion.div

              className="testimonial-popup-overlay"

              onClick={() =>
                setActiveTestimonial(null)
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

              <motion.div

                className="testimonial-popup"

                onClick={(e) =>
                  e.stopPropagation()
                }

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
              >

                <button
                  className="close-popup"

                  onClick={() =>
                    setActiveTestimonial(null)
                  }
                >

                  <FaTimes />

                </button>

                <FaQuoteLeft className="popup-quote" />

                <h2>

                  {activeTestimonial.company}

                </h2>

                <h4>

                  {activeTestimonial.role}

                </h4>

                <p>

                  {activeTestimonial.feedback}

                </p>

                <span>

                  — {activeTestimonial.name}

                </span>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </main>

  );

};

export default Profile;