import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../styles/contact.css";

// 🔥 Firebase
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // ✅ ADDED

const Contact = () => {

  // 🔹 Reveal animation
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

  // 🔥 FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 UPDATED HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ VALIDATION ADDED
    if (!form.name.trim()) {
      alert("Name is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    if (form.message.trim().length < 10) {
      alert("Message must be at least 10 characters");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp() // 🔥 UPDATED (server time)
      });

      setSuccess("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      alert("Error sending message ❌");
    } finally {
      setLoading(false);
    }
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

      {/* CONTACT CARDS */}
      <div className="terminal-grid">

        <a href="https://github.com/raajkumardevops" target="_blank" rel="noreferrer" className="terminal-card reveal delay-1">
          <FaGithub className="terminal-icon" />
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/raajkumar-pr" target="_blank" rel="noreferrer" className="terminal-card reveal delay-2">
          <FaLinkedin className="terminal-icon" />
          <span>LinkedIn</span>
        </a>

        <a href="https://instagram.com/_raaj._.kumar_" target="_blank" rel="noreferrer" className="terminal-card reveal delay-3">
          <FaInstagram className="terminal-icon" />
          <span>Instagram</span>
        </a>

        <a href="https://wa.me/+919344247165" target="_blank" rel="noreferrer" className="terminal-card reveal delay-4">
          <FaWhatsapp className="terminal-icon" />
          <span>WhatsApp</span>
        </a>

        <a href="mailto:raajkumardevops@gmail.com" className="terminal-card reveal delay-5">
          <FaEnvelope className="terminal-icon" />
          <span>Email</span>
        </a>

        <a href="tel:+919344247165" className="terminal-card reveal delay-6">
          <FaPhoneAlt className="terminal-icon" />
          <span>Contact</span>
        </a>

      </div>
     
      {/* 🔥 CONTACT FORM */}
      <form onSubmit={handleSubmit} className="terminal-form reveal">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        {/* ✅ UPDATED BUTTON (loading + disable) */}
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      {success && <p className="success-msg">{success}</p>}

    </main>
  );
};

export default Contact;