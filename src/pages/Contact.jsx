import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyNumber = () => {
    navigator.clipboard.writeText("+91 9344247165");
    alert("Contact number copied!");
  };

  return (
    <main className="terminal-wrapper">

      {/* HEADER */}
      <div className="terminal-header">
        <span className="terminal-tag reveal">COMMUNICATION_MODULE</span>

        <h1 className="reveal delay-1">
          SYSTEM <span>TERMINAL</span>
        </h1>

        <p className="reveal delay-2">
          Direct secure channels to connect with me.
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="terminal-grid">

        <a
          href="https://github.com/raajkumardevops"
          target="_blank"
          rel="noreferrer"
          className="terminal-card reveal delay-1"
        >
          <FaGithub className="terminal-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/raajkumar-pr"
          target="_blank"
          rel="noreferrer"
          className="terminal-card reveal delay-2"
        >
          <FaLinkedin className="terminal-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://instagram.com/_raaj._.kumar_"
          target="_blank"
          rel="noreferrer"
          className="terminal-card reveal delay-3"
        >
          <FaInstagram className="terminal-icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://wa.me/+919344247165"
          target="_blank"
          rel="noreferrer"
          className="terminal-card reveal delay-4"
        >
          <FaWhatsapp className="terminal-icon" />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:raajkumardevops@gmail.com"
          className="terminal-card reveal delay-5"
        >
          <FaEnvelope className="terminal-icon" />
          <span>Email</span>
        </a>

       <a
          href="tel:+919344247165"
          className="terminal-card reveal delay-6"
        >
          <FaPhoneAlt className="terminal-icon" />
          <span>Contact</span>
        </a>


      </div>
    </main>
  );
};

export default Contact;
