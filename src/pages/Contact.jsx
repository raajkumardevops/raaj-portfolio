import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "../styles/contact.css";

// 🔥 Firebase
import { db } from "../firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// 🔥 EmailJS
import emailjs from "@emailjs/browser";

const Contact = () => {

  /* =================================
     FORM STATE
  ================================= */

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    websiteType: "",
    budget: "",
    message: "",
    agreement: false,
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

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

    // VALIDATION

    if (!form.name.trim()) {
      alert("Name is required");
      return;
    }

    if (!form.phone.trim()) {
      alert("Phone number is required");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert(
        "Phone number must be 10 digits"
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    if (!form.websiteType) {
      alert(
        "Please select website type"
      );
      return;
    }

    if (!form.message.trim()) {
      alert(
        "Project requirement is required"
      );
      return;
    }

    if (
      form.message.trim().length < 15
    ) {

      alert(
        "Requirement must be at least 15 characters"
      );

      return;
    }

    if (!form.agreement) {
      alert("Please accept terms");
      return;
    }

    try {

      setLoading(true);

      /* =========================
         FIREBASE
      ========================= */

      await addDoc(
        collection(db, "contacts"),
        {
          ...form,
          createdAt: serverTimestamp(),
        }
      );

      /* =========================
         EMAILJS
      ========================= */

      await emailjs.send(

        "portfolio_service",

        "template_ka92upp",

        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          websiteType:
            form.websiteType,
          budget: form.budget,
          message: form.message,
        },

        "qcUEHoAaDDBHc4h3I"

      );

      setSuccess(
        "Project request submitted successfully ✅"
      );

      // RESET FORM
      setForm({
        name: "",
        phone: "",
        email: "",
        websiteType: "",
        budget: "",
        message: "",
        agreement: false,
      });

    } catch (error) {

      console.error(error);

      alert("Something failed ❌");

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="terminal-wrapper">

      {/* =========================
          HEADER
      ========================= */}

      <motion.div
        className="terminal-header"

        variants={containerVariants}

        initial="hidden"

        animate="visible"
      >

        <motion.span
          className="terminal-tag"

          variants={itemVariants}
        >

          CLIENT_REQUIREMENT_MODULE

        </motion.span>

        <motion.h1
          variants={itemVariants}
        >

          PROJECT <span>REQUEST</span>

        </motion.h1>

        <motion.p
          variants={itemVariants}
        >

          Tell me about your project
          requirement.

        </motion.p>

      </motion.div>

      {/* =========================
          CONTACT CARDS
      ========================= */}

      <motion.div
        className="terminal-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}
      >

        {/* GITHUB */}
        <motion.a
          href="https://github.com/raajkumardevops"

          target="_blank"

          rel="noreferrer"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaGithub className="terminal-icon" />

          <span>GitHub</span>

        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          href="https://linkedin.com/in/raajkumar-pr"

          target="_blank"

          rel="noreferrer"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaLinkedin className="terminal-icon" />

          <span>LinkedIn</span>

        </motion.a>

        {/* INSTAGRAM */}
        <motion.a
          href="https://instagram.com/_raaj._.kumar_"

          target="_blank"

          rel="noreferrer"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaInstagram className="terminal-icon" />

          <span>Instagram</span>

        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          href="https://wa.me/+919344247165"

          target="_blank"

          rel="noreferrer"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaWhatsapp className="terminal-icon" />

          <span>WhatsApp</span>

        </motion.a>

        {/* EMAIL */}
        <motion.a
          href="mailto:raajkumardevops@gmail.com"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaEnvelope className="terminal-icon" />

          <span>Email</span>

        </motion.a>

        {/* PHONE */}
        <motion.a
          href="tel:+919344247165"

          className="terminal-card"

          variants={itemVariants}

          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >

          <FaPhoneAlt className="terminal-icon" />

          <span>Contact</span>

        </motion.a>

      </motion.div>

      {/* =========================
          REQUIREMENT FORM
      ========================= */}

      <motion.form
        onSubmit={handleSubmit}

        className="terminal-form"

        initial={{
          opacity: 0,
          y: 50,
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
            Restaurant Website
          </option>

          <option>
            Textile Website
          </option>

          <option>
            Custom Web App
          </option>

          <option>
            Other
          </option>

        </select>

        {/* BUDGET */}
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

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Describe your project requirement..."
          value={form.message}
          onChange={handleChange}
        />

        {/* CHECKBOX */}
        <label className="agreement-box">

          <input
            type="checkbox"
            name="agreement"
            checked={form.agreement}
            onChange={handleChange}
          />

          <span>
            I agree to share my project
            details with RK(DEV)
          </span>

        </label>

        {/* BUTTON */}
        <motion.button
          type="submit"

          disabled={loading}

          whileHover={{
            scale: 1.02,
            y: -2,
          }}

          whileTap={{
            scale: 0.97,
          }}
        >

          {
            loading
              ? "Submitting..."
              : "Send Project Request"
          }

        </motion.button>

      </motion.form>

      {/* SUCCESS */}
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

    </main>

  );

};

export default Contact;