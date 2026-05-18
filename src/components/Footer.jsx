import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {

  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,

} from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {

  /* =================================
     SCROLL TO TOP
  ================================= */

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <motion.footer

      className="stark-footer"

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
      }}
    >

      {/* =================================
          GLOW ORB
      ================================= */}

      <div className="footer-orb"></div>

      {/* =================================
          TOP SECTION
      ================================= */}

      <div className="footer-top">

        {/* =========================
            LEFT
        ========================= */}

        <div className="footer-left">

          <motion.h1

            className="footer-logo"

            whileHover={{
              scale: 1.03,
            }}
          >

            RK(DEV)

          </motion.h1>

          <p className="footer-description">

            Architecting futuristic digital
            systems with modern web
            technologies, scalable backend
            infrastructure, and immersive
            user experiences.

          </p>

          {/* SOCIAL LINKS */}

          <div className="footer-socials">

            <motion.a

              href="https://github.com/raajkumardevops"

              target="_blank"

              rel="noreferrer"

              whileHover={{
                y: -4,
              }}
            >

              <FaGithub />

            </motion.a>

            <motion.a

              href="https://linkedin.com/in/raajkumar-pr"

              target="_blank"

              rel="noreferrer"

              whileHover={{
                y: -4,
              }}
            >

              <FaLinkedin />

            </motion.a>

            <motion.a

              href="https://instagram.com/_raaj._.kumar_"

              target="_blank"

              rel="noreferrer"

              whileHover={{
                y: -4,
              }}
            >

              <FaInstagram />

            </motion.a>

            <motion.a

              href="https://wa.me/+919344247165"

              target="_blank"

              rel="noreferrer"

              whileHover={{
                y: -4,
              }}
            >

              <FaWhatsapp />

            </motion.a>

          </div>

        </div>

        {/* =========================
            CENTER
        ========================= */}

        <div className="footer-center">

          <h3>
            Navigation
          </h3>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/projects">
              Deployments
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <Link to="/contact">
              Terminal
            </Link>

          </div>

        </div>

        {/* =========================
            RIGHT
        ========================= */}

        <div className="footer-right">

          <h3>
            System Status
          </h3>

          <div className="system-box">

            <span className="system-dot"></span>

            <p>
              All Systems Operational
            </p>

          </div>

          <div className="footer-stack">

            <span>React</span>

            <span>Firebase</span>

            <span>MERN</span>

            <span>Framer Motion</span>

          </div>

        </div>

      </div>

      {/* =================================
          DIVIDER
      ================================= */}

      <div className="footer-divider"></div>

      {/* =================================
          BOTTOM
      ================================= */}

      <div className="footer-bottom">

        <p className="footer-copy">

          © 2025 Raaj Kumar.
          All rights reserved.

        </p>

        {/* SCROLL BUTTON */}

        <motion.button

          className="scroll-top-btn"

          onClick={scrollTop}

          whileHover={{
            y: -3,
            scale: 1.05,
          }}

          whileTap={{
            scale: 0.95,
          }}
        >

          <FaArrowUp />

        </motion.button>

      </div>

    </motion.footer>

  );

};

export default Footer;