import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaTimes,
  FaQuoteLeft,
  FaCircle,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFire,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiOpenai,
  SiFramer,
  SiGoogleanalytics,
} from "react-icons/si";

import "../styles/profile.css";

import profileImg from "../assets/professionalPhotoFinal.jpg";

/* =================================
   TESTIMONIAL DATA
================================= */

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

    name: "Krishnan Thiruvengadam",
  },

];

/* =================================
   TIMELINE DATA
================================= */

const timelineData = [

  {
    year: "2024",

    title:
      "Frontend Development Journey",

    status: "INITIALIZED",

    description:
      "Started building responsive websites and cinematic frontend interfaces using HTML, CSS, JavaScript, and React.",
  },

  {
    year: "2025",

    title:
      "MERN Stack Systems",

    status: "ACTIVE",

    description:
      "Built scalable full stack applications using React, Node.js, MongoDB, Firebase, and Framer Motion.",
  },

  {
    year: "2026",

    title:
      "Freelance Client Projects",

    status: "LIVE",

    description:
      "Developed futuristic UI systems, startup-level portfolio architectures, and premium deployment-ready applications.",
  },

];

/* =================================
   SKILL MATRIX
================================= */

const skillData = [

  {
    name: "React",
    percent: 95,
    icon: <FaReact />,
  },

  {
    name: "Bootstrap",
    percent: 90,
    icon: <FaBootstrap />,
  },

  {
    name: "Node.js",
    percent: 82,
    icon: <FaNodeJs />,
  },

  {
    name: "Express",
    percent: 80,
    icon: <SiExpress />,
  },

  {
    name: "MongoDB",
    percent: 85,
    icon: <SiMongodb />,
  },

  {
    name: "Firebase",
    percent: 84,
    icon: <FaFire />,
  },

  {
    name: "Prompt Engineering",
    percent: 88,
    icon: <SiOpenai />,
  },

  {
    name: "UI Design",
    percent: 93,
    icon: <FaReact />,
  },

  {
    name: "Framer Motion",
    percent: 90,
    icon: <SiFramer />,
  },

  {
    name: "SEO",
    percent: 76,
    icon: <SiGoogleanalytics />,
  },

];

/* =================================
   COUNTER COMPONENT
================================= */

const Counter = ({ end, suffix }) => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const duration = 1800;

    const increment =
      end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(
          Math.floor(start)
        );

      }

    }, 16);

    return () =>
      clearInterval(timer);

  }, [end]);

  return (

    <>
      {count}
      {suffix}
    </>

  );

};

const Profile = () => {

  const [showImage, setShowImage] =
    useState(false);

  const [activeTestimonial,
    setActiveTestimonial] =
    useState(null);

  return (

    <main className="profile-wrapper">

      {/* =================================
          FLOATING PARTICLES
      ================================= */}

      <div className="floating-tech react-particle">
        <FaReact />
      </div>

      <div className="floating-tech node-particle">
        <FaNodeJs />
      </div>

      <div className="floating-tech mongo-particle">
        <SiMongodb />
      </div>

      <div className="floating-tech firebase-particle">
        <FaFire />
      </div>

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

        {/* SCANLINE */}

        <div className="profile-scanline"></div>

        {/* HUD */}

        <div className="profile-hud">

          <div className="hud-line"></div>

          <span>

            PROFILE_MODULE_ACTIVE

          </span>

        </div>

        {/* STATUS */}

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

        {/* CONTENT */}

        <div className="profile-content">

          {/* IMAGE */}

          <motion.div

            className="profile-image"

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

          {/* TEXT */}

          <div className="profile-text">

            <h1 className="profile-title">

              PROFILE <span>PAGE</span>

            </h1>

            <h2 className="profile-subtitle">

              FULL STACK / MERN DEVELOPER

            </h2>

            <p className="profile-description">

              I am a passionate Full Stack Developer focused on building
              scalable, efficient, and cinematic digital experiences.

            </p>

            <p className="profile-description">

              My goal is to continuously evolve my skills, create futuristic
              systems, and deliver premium deployment-ready applications.

            </p>

            {/* TECH PILLS */}

            <div className="profile-tech-pills">

              {
                [
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Firebase",
                  "Framer Motion",
                  "SEO",
                ].map((tech, index) => (

                  <motion.span

                    key={index}

                    className="tech-pill"

                    whileHover={{
                      y: -4,
                    }}
                  >

                    {tech}

                  </motion.span>

                ))
              }

            </div>

            {/* STATS */}

            <div className="profile-stats">

              <motion.div

                className="stat-box"

                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
              >

                <div className="stat-shine"></div>

                <span className="stat-value">

                  <Counter
                    end={10}
                    suffix="+"
                  />

                </span>

                <span className="stat-label">

                  Projects

                </span>

              </motion.div>

              <motion.div

                className="stat-box"

                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
              >

                <div className="stat-shine"></div>

                <span className="stat-value">

                  <Counter
                    end={9}
                    suffix="+"
                  />

                </span>

                <span className="stat-label">

                  Technologies

                </span>

              </motion.div>

              <motion.div

                className="stat-box"

                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
              >

                <div className="stat-shine"></div>

                <span className="stat-value">

                  ∞

                </span>

                <span className="stat-label">

                  Learning

                </span>

              </motion.div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* =================================
          TESTIMONIAL SECTION
      ================================= */}

      <section className="testimonial-section">

        <div className="testimonial-header">

          CLIENT_FEEDBACK_SYSTEM

        </div>

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
          TIMELINE
      ================================= */}

      <section className="timeline-section">

        <div className="timeline-header">

          MISSION_TIMELINE

        </div>

        <div className="timeline-container">

          {
            timelineData.map(
              (item, index) => (

                <motion.div

                  key={index}

                  className="timeline-item"

                  initial={{
                    opacity: 0,
                    y: 60,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}

                  viewport={{
                    once: true,
                  }}
                >

                  <div className="timeline-line"></div>

                  <div className="timeline-node"></div>

                  <div className="timeline-card-box">

                    <div className="timeline-top">

                      <span className="timeline-year">

                        {item.year}

                      </span>

                      <span className="timeline-status-badge">

                        {item.status}

                      </span>

                    </div>

                    <h3>

                      {item.title}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                  </div>

                </motion.div>

              )
            )
          }

        </div>

      </section>

      {/* =================================
          SKILL MATRIX
      ================================= */}

      <section className="skill-matrix-section">

        <div className="skill-matrix-header">

          SKILL_MATRIX_SYSTEM

        </div>

        <div className="skill-matrix-grid">

          {
            skillData.map(
              (skill, index) => (

                <motion.div

                  key={index}

                  className="skill-card"

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="skill-top">

                    <div className="skill-title-wrap">

                      <span className="skill-icon">

                        {skill.icon}

                      </span>

                      <h3>

                        {skill.name}

                      </h3>

                    </div>

                    <span className="skill-percent">

                      {skill.percent}%

                    </span>

                  </div>

                  <div className="skill-bar">

                    <motion.div

                      className="skill-fill"

                      initial={{
                        width: 0,
                      }}

                      whileInView={{
                        width:
                          `${skill.percent}%`,
                      }}

                      transition={{
                        duration: 1.4,
                        delay: index * 0.1,
                      }}

                      viewport={{
                        once: true,
                      }}
                    />

                  </div>

                </motion.div>

              )
            )
          }

        </div>

      </section>

{/* =================================
    TERMINAL + CTA SECTION
================================= */}

<section className="terminal-section">

  <div className="terminal-layout">

    {/* =================================
        LEFT TERMINAL
    ================================= */}

    <motion.div

      className="terminal-window"

      initial={{
        opacity: 0,
        x: -40,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
      }}
    >

      <div className="terminal-topbar">

        <span className="dot red"></span>

        <span className="dot yellow"></span>

        <span className="dot green"></span>

      </div>

      <div className="terminal-content">

        <p>

          {">"} SYSTEM_STATUS :
          ONLINE

        </p>

        <p>

          {">"} READY_FOR_COLLABORATION

        </p>

        <p>

          {">"} FREELANCE_PROTOCOL :
          ACTIVE

        </p>

        <p>

          {">"} CONTACT_CHANNEL :
          OPEN

        </p>

        <p className="cursor-line">

          {">"} awaiting_next_mission

          <span className="terminal-cursor">
            |
          </span>

        </p>

      </div>

    </motion.div>

    {/* =================================
        RIGHT CTA PANEL
    ================================= */}

    <motion.div

      className="contact-cta-card"

      initial={{
        opacity: 0,
        x: 40,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
      }}
    >

      {/* CHIP */}

      <div className="cta-chip">

        <FaCircle />

        AVAILABLE NOW

      </div>

      {/* TITLE */}

      <h2 className="cta-title">

        INITIATE
        <span> CONTACT</span>

      </h2>

      {/* TEXT */}

      <p className="cta-description">

        Available for freelance projects,
        startup collaborations,
        frontend architecture,
        and cinematic web experiences.

      </p>

      {/* RESPONSE */}

      <div className="cta-response">

        <span>

          Average Response

        </span>

        <h3>

          {"<"} 12 HOURS

        </h3>

      </div>

      {/* BUTTONS */}

      <div className="cta-buttons">

        <motion.a

          href="/contact"

          className="cta-primary"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.96,
          }}
        >

          OPEN COMMUNICATION

        </motion.a>

        <motion.a

          href="/projects"

          className="cta-secondary"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.96,
          }}
        >

          VIEW DEPLOYMENTS

        </motion.a>

      </div>

    </motion.div>

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