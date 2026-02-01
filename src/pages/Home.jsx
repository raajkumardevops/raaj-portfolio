import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main id="home" className="home-wrapper">
      <div className="home-content">

        {/* ================= HERO CARD ================= */}
        <div className="hero-card">

          {/* HUD TOP LEFT */}
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

          {/* HUD BOTTOM RIGHT */}
          <div className="hud-bottom-right">
            <span>POWER_LEVEL: 100%</span>
            <div className="power-bar">
              <div className="power-fill"></div>
            </div>
          </div>

        </div>

        {/* ================= SKILLS SECTION ================= */}
        <section className="home-skills" id="skills">

          <div className="skills-hud">
            SYSTEMS_OVERVIEW
          </div>

          <h2 className="skills-title">
            CORE <span>SKILLS</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-box">HTML</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">React</div>
            <div className="skill-box">Node.js</div>
            <div className="skill-box">Express</div>
            <div className="skill-box">MongoDB</div>
            <div className="skill-box">Git & GitHub</div>
          </div>

        </section>

      </div>
    </main>
  );
};

export default Home;
