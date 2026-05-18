import { Link } from "react-router-dom";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaHome,
  FaCode,
  FaUserAstronaut,
  FaTerminal,
} from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  /* =================================
     NAV LINKS
  ================================= */

  const navItems = [

    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },

    {
      name: "Deployments",
      path: "/projects",
      icon: <FaCode />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <FaUserAstronaut />,
    },

    {
      name: "Terminal",
      path: "/contact",
      icon: <FaTerminal />,
    },

  ];

  return (

    <motion.header

      className="stark-navbar"

      initial={{
        y: -100,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >

      {/* =================================
          LEFT
      ================================= */}

      <motion.div

        className="nav-left"

        whileHover={{
          scale: 1.03,
        }}
      >

        {/* LOGO ICON */}
        <div className="stark-icon">

          <svg viewBox="0 0 48 48">

            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            />

          </svg>

        </div>

        {/* LOGO TEXT */}
        <span className="nav-logo">

          RK(DEV)

        </span>

      </motion.div>

      {/* =================================
          DESKTOP NAV
      ================================= */}

      <nav className="nav-links">

        {
          navItems.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -2,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <Link to={item.path}>

                {item.name}

              </Link>

            </motion.div>

          ))
        }

      </nav>

      {/* =================================
          RIGHT
      ================================= */}

      <div className="nav-right">

        {/* STATUS */}
        <motion.div

          className="nav-status"

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

          <span className="status-dot"></span>

          <span className="status-text">

            System Online

          </span>

        </motion.div>

        {/* MENU BUTTON */}
        <motion.button

          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}

          onClick={() =>
            setMenuOpen(!menuOpen)
          }

          whileTap={{
            scale: 0.9,
          }}
        >

          {
            menuOpen
              ? "✕"
              : "☰"
          }

        </motion.button>

      </div>

      {/* =================================
          MOBILE MENU
      ================================= */}

      <AnimatePresence>

        {
          menuOpen && (

            <motion.div

              className="mobile-menu"

              initial={{
                opacity: 0,
                y: -20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -20,
              }}

              transition={{
                duration: 0.25,
              }}
            >

              {
                navItems.map((item, index) => (

                  <motion.div

                    key={index}

                    whileHover={{
                      x: 4,
                    }}
                  >

                    <Link

                      onClick={() =>
                        setMenuOpen(false)
                      }

                      to={item.path}
                    >

                      {item.icon}

                      {item.name}

                    </Link>

                  </motion.div>

                ))
              }

            </motion.div>

          )
        }

      </AnimatePresence>

    </motion.header>

  );

};

export default Navbar;