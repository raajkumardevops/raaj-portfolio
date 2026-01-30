import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <main id="home" className="home-wrapper">

      <div className="hero-card text-center position-relative">

        {/* HUD Top Left */}
        <div className="hud-top-left">
          <div className="hud-line"></div>
          <span>MARK_VII_CONNECTED</span>
        </div>

        {/* Main Content */}
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

        {/* Buttons */}
        <div className="hero-actions">
          <button className="btn btn-primary-custom">
            Initialize Projects
          </button>
          <button className="btn btn-outline-custom">
            Technical Briefing
          </button>
        </div>

        {/* HUD Bottom Right */}
        <div className="hud-bottom-right">
          <span>POWER_LEVEL: 100%</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
        </div>

      </div>

    </main>
  );
};

export default Home;
