import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

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

  return (
    <main id="home" className="home-wrapper">
      <div className="home-content">

        {/* HERO CARD (NOW SLIDES IN) */}
        <div className="hero-card reveal">

          <div className="hud-top-left">
            <div className="hud-line"></div>
            <span>MARK_VII_CONNECTED</span>
          </div>

          <h1 className="hero-title">
            RAAJ <span>KUMAR</span>
          </h1>

          <h2 className="hero-subtitle">
            FULL STACK / MERN DEVELOPER
          </h2>

          <p className="hero-description">
            Architecting digital systems with precision, performance,
            and advanced modular infrastructure.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary-custom"
              onClick={() => navigate("/projects")}
            >
              Initialize Projects
            </button>

            <button
              className="btn btn-outline-custom"
              onClick={() => navigate("/profile")}
            >
              Technical Briefing
            </button>
          </div>

          <div className="hud-bottom-right">
            <span>KNOWLEDGE_LEVEL: 100%</span>
            <div className="power-bar">
              <div className="power-fill"></div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <section className="home-skills reveal" id="skills">
          <div className="skills-hud">SYSTEMS_OVERVIEW</div>

          <h2 className="skills-title">
            CORE <span>SKILLS</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-box reveal delay-1">HTML</div>
            <div className="skill-box reveal delay-2">CSS</div>
            <div className="skill-box reveal delay-3">Bootstrap</div>
            <div className="skill-box reveal delay-1">JavaScript</div>
            <div className="skill-box reveal delay-2">React</div>
            <div className="skill-box reveal delay-3">Node.js</div>
            <div className="skill-box reveal delay-1">Express</div>
            <div className="skill-box reveal delay-2">MongoDB</div>
            <div className="skill-box reveal delay-3">Git & GitHub</div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;
