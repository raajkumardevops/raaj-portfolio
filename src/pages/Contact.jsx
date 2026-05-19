import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaRocket,
  FaClock,
  FaShieldAlt,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import "../styles/contact.css";

const Contact = () => {

  /* =================================
     FORM STATE
  ================================= */

  const [form, setForm] =
    useState({

      name: "",
      phone: "",
      email: "",
      websiteType: "",
      budget: "",
      message: "",
      agreement: false,

    });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  /* =================================
     HANDLE CHANGE
  ================================= */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm({

      ...form,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };

  /* =================================
     HANDLE SUBMIT
  ================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    /* VALIDATION */

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.websiteType ||
      !form.budget ||
      !form.message
    ) {

      setSuccess(
        "Please fill all fields ❌"
      );

      return;

    }

    if (!form.agreement) {

      setSuccess(
        "Please accept agreement checkbox ❌"
      );

      return;

    }

    setLoading(true);

    setSuccess("");

    try {

      /* =========================
         SAVE TO FIREBASE
      ========================= */

      await addDoc(
        collection(db, "contacts"),
        {

          ...form,

          createdAt:
            serverTimestamp(),

        }
      );

      /* =========================
         WEB3FORMS
      ========================= */

      const web3Data =
        new FormData();

      web3Data.append(
        "access_key",
        "a3bf2f4b-f8e5-4dce-bf13-8ac6e0cff831"
      );

      web3Data.append(
        "name",
        form.name
      );

      web3Data.append(
        "phone",
        form.phone
      );

      web3Data.append(
        "email",
        form.email
      );

      web3Data.append(
        "websiteType",
        form.websiteType
      );

      web3Data.append(
        "budget",
        form.budget
      );

      web3Data.append(
        "message",
        form.message
      );

      const response =
        await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: web3Data,
          }
        );

      const result =
        await response.json();

      if (result.success) {

        setSuccess(
          "Project Request Sent Successfully 🚀"
        );

        /* RESET FORM */

        setForm({

          name: "",
          phone: "",
          email: "",
          websiteType: "",
          budget: "",
          message: "",
          agreement: false,

        });

      } else {

        setSuccess(
          "Something went wrong ❌"
        );

      }

    } catch (error) {

      console.error(error);

      setSuccess(
        "Submission Failed ❌"
      );

    } finally {

      setLoading(false);

    }

  };

  /* =================================
     SOCIAL LINKS
  ================================= */

  const socials = [

    {

      icon: <FaGithub />,

      title: "GitHub",

      desc:
        "Explore production repositories and real-world development systems.",

      link:
        "https://github.com/raajkumardevops",

    },

    {

      icon: <FaLinkedin />,

      title: "LinkedIn",

      desc:
        "Professional collaborations, networking and business communication.",

      link:
        "https://linkedin.com",

    },

    {

      icon: <FaInstagram />,

      title: "Instagram",

      desc:
        "Creative UI showcases, updates and visual project moments.",

      link:
        "https://instagram.com",

    },

    {

      icon: <FaWhatsapp />,

      title: "WhatsApp",

      desc:
        "Quick project discussions and fast communication support.",

      link:
        "https://wa.me/919344247165",

    },

  ];

  return (

    <main className="terminal-wrapper">

      {/* =================================
          BACKGROUND EFFECTS
      ================================= */}

      <div className="bg-orb orb-1"></div>

      <div className="bg-orb orb-2"></div>

      {/* =================================
          HEADER
      ================================= */}

      <motion.div

        className="terminal-header"

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

        <span className="terminal-tag">

          CLIENT_REQUIREMENT_MODULE

        </span>

        <h1>

          PROJECT <span>REQUEST</span>

        </h1>

        <p>

          Premium client communication
          portal for modern digital
          solutions and scalable
          applications.

        </p>

      </motion.div>

      {/* =================================
          STATS SECTION
      ================================= */}

      <motion.section

        className="terminal-stats"

        initial="hidden"

        whileInView="visible"

        viewport={{

          once: true,
          amount: 0.2,

        }}

        variants={{

          hidden: {},

          visible: {

            transition: {
              staggerChildren: 0.15,
            },

          },

        }}
      >

        {/* CARD 1 */}

        <motion.div

          className="stats-card"

          variants={{

            hidden: {

              opacity: 0,
              y: 60,

            },

            visible: {

              opacity: 1,
              y: 0,

              transition: {
                duration: 0.7,
              },

            },

          }}

          whileHover={{

            y: -10,
            scale: 1.03,

          }}
        >

          <div className="stats-icon">

            <FaRocket />

          </div>

          <h3>50+</h3>

          <p>
            Projects Delivered
          </p>

          <span className="card-badge">
            ACTIVE
          </span>

        </motion.div>

        {/* CARD 2 */}

        <motion.div

          className="stats-card"

          variants={{

            hidden: {

              opacity: 0,
              y: 60,

            },

            visible: {

              opacity: 1,
              y: 0,

              transition: {
                duration: 0.7,
              },

            },

          }}

          whileHover={{

            y: -10,
            scale: 1.03,

          }}
        >

          <div className="stats-icon">

            <FaClock />

          </div>

          <h3>24H</h3>

          <p>
            Response Time
          </p>

          <span className="card-badge">
            FAST
          </span>

        </motion.div>

        {/* CARD 3 */}

        <motion.div

          className="stats-card"

          variants={{

            hidden: {

              opacity: 0,
              y: 60,

            },

            visible: {

              opacity: 1,
              y: 0,

              transition: {
                duration: 0.7,
              },

            },

          }}

          whileHover={{

            y: -10,
            scale: 1.03,

          }}
        >

          <div className="stats-icon">

            <FaCode />

          </div>

          <h3>MERN</h3>

          <p>
            Modern Stack
          </p>

          <span className="card-badge">
            STACK
          </span>

        </motion.div>

        {/* CARD 4 */}

        <motion.div

          className="stats-card"

          variants={{

            hidden: {

              opacity: 0,
              y: 60,

            },

            visible: {

              opacity: 1,
              y: 0,

              transition: {
                duration: 0.7,
              },

            },

          }}

          whileHover={{

            y: -10,
            scale: 1.03,

          }}
        >

          <div className="stats-icon">

            <FaShieldAlt />

          </div>

          <h3>100%</h3>

          <p>
            Secure Solutions
          </p>

          <span className="card-badge">
            VERIFIED
          </span>

        </motion.div>

      </motion.section>

      {/* =================================
          SECTION HEADING
      ================================= */}

      <div className="section-heading">

        <span>

          CLIENT COMMUNICATION CHANNELS

        </span>

        <h2>

          Connect Through Preferred
          Platforms

        </h2>

        <p>

          Select your preferred
          communication channel for
          project discussions,
          collaborations and updates.

        </p>

      </div>

      {/* =================================
          SOCIAL CARDS
      ================================= */}

      <motion.section

        className="terminal-grid"

        initial="hidden"

        whileInView="visible"

        viewport={{

          once: true,
          amount: 0.15,

        }}

        variants={{

          hidden: {},

          visible: {

            transition: {
              staggerChildren: 0.18,
            },

          },

        }}
      >

        {
          socials.map((item, index) => (

            <motion.a

              href={item.link}

              target="_blank"

              rel="noreferrer"

              key={index}

              className="terminal-card"

              variants={{

                hidden: {

                  opacity: 0,
                  y: 80,
                  scale: 0.9,

                },

                visible: {

                  opacity: 1,
                  y: 0,
                  scale: 1,

                  transition: {

                    duration: 0.8,
                    ease: "easeOut",

                  },

                },

              }}

              whileHover={{

                y: -12,
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,

              }}
            >

              <div className="card-glow"></div>

              <span className="live-badge">

                LIVE

              </span>

              <motion.div

                className="icon-circle"

                whileHover={{

                  rotate: 10,
                  scale: 1.1,

                }}
              >

                {item.icon}

              </motion.div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.desc}

              </p>

              <motion.div

                className="connect-link"

                whileHover={{
                  x: 4,
                }}
              >

                CONNECT NOW

                <FaArrowRight />

              </motion.div>

            </motion.a>

          ))
        }

      </motion.section>

      {/* =================================
          MAIN LAYOUT
      ================================= */}

      <section className="terminal-main-layout">

        {/* =================================
            INFO PANEL
        ================================= */}

        <motion.div

          className="terminal-info-panel"

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
        >

          <div className="info-box">

            <span className="info-label">
              SYSTEM STATUS
            </span>

            <h3>
              Secure Client Portal
              Active & Ready.
            </h3>

          </div>

          <div className="info-box">

            <span className="info-label">
              DEVELOPMENT STACK
            </span>

            <h3>
              React • Node • Express
              • MongoDB
            </h3>

          </div>

          <div className="info-box">

            <span className="info-label">
              SUPPORT
            </span>

            <h3>
              UI/UX • Web Apps •
              Admin Panels • SaaS
            </h3>

          </div>

        </motion.div>

        {/* =================================
            FORM
        ================================= */}

        <motion.form

          className="terminal-form"

          onSubmit={handleSubmit}

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <div className="terminal-bar">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <div className="form-top">

            <span>
              PROJECT_INITIALIZATION
            </span>

            <h2>
              Project Requirement
            </h2>

            <p>
              Fill the client request
              form to initiate project
              discussion.
            </p>

          </div>

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          {/* PHONE */}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          {/* WEBSITE TYPE */}

          <div className="select-wrapper">

            <select
              name="websiteType"
              value={form.websiteType}
              onChange={handleChange}
            >

              <option value="">
                Select Website Type
              </option>

              <option>
                Business Website
              </option>

              <option>
                Portfolio Website
              </option>

              <option>
                E-Commerce Website
              </option>

              <option>
                Billing Software
              </option>

              <option>
                Admin Dashboard
              </option>

              <option>
                Custom Web App
              </option>

            </select>

          </div>

          {/* BUDGET */}

          <div className="select-wrapper">

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >

              <option value="">
                Select Budget Range
              </option>

              <option>
                Below ₹10K
              </option>

              <option>
                ₹10K - ₹25K
              </option>

              <option>
                ₹25K - ₹50K
              </option>

              <option>
                ₹50K+
              </option>

            </select>

          </div>

          {/* MESSAGE */}

          <textarea
            name="message"
            placeholder="Describe your project requirement..."
            value={form.message}
            onChange={handleChange}
          />

          {/* AGREEMENT */}

          <label className="agreement-box">

            <input
              type="checkbox"
              name="agreement"
              checked={form.agreement}
              onChange={handleChange}
            />

            <span>

              I agree to share my
              project requirements for
              communication purposes.

            </span>

          </label>

          {/* BUTTON */}

          <motion.button

            type="submit"

            disabled={loading}

            whileTap={{
              scale: 0.96,
            }}

            whileHover={{
              scale: 1.02,
            }}
          >

            {
              loading
                ? "INITIALIZING..."
                : "SEND PROJECT REQUEST"
            }

          </motion.button>

          {/* SUCCESS MESSAGE */}

          {
            success && (

              <motion.p

                className="success-msg"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >

                {success}

              </motion.p>

            )
          }

        </motion.form>

      </section>

    </main>

  );

};

export default Contact;