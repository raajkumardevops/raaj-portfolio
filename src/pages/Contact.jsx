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
  const copyNumber = () => {
    navigator.clipboard.writeText("+91933247165");
    alert("Contact number copied!");
  };

  return (
    <main className="terminal-wrapper">
      <div className="terminal-header">
        <span className="terminal-tag">COMMUNICATION_MODULE</span>
        <h1>
          SYSTEM <span>TERMINAL</span>
        </h1>
        <p>Direct secure channels to connect with me.</p>
      </div>

      <div className="terminal-grid">

        <a
          href="https://github.com/raajkumardevops"
          target="_blank"
          className="terminal-card"
        >
          <FaGithub className="terminal-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/raajkumar-pr"
          target="_blank"
          className="terminal-card"
        >
          <FaLinkedin className="terminal-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://instagram.com/_raaj._.kumar_"
          target="_blank"
          className="terminal-card"
        >
          <FaInstagram className="terminal-icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://wa.me/+919344247165"
          target="_blank"
          className="terminal-card"
        >
          <FaWhatsapp className="terminal-icon" />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:raajkumardevops@gmail.com"
          className="terminal-card"
        >
          <FaEnvelope className="terminal-icon" />
          <span>Email</span>
        </a>

        <div className="terminal-card copy-card" onClick={copyNumber}>
          <FaPhoneAlt className="terminal-icon" />
          <span>Contact</span>
        </div>

      </div>
    </main>
  );
};

export default Contact;
