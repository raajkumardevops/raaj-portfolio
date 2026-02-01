import { useState } from "react";
import "../styles/profile.css";
import profileImg from "../assets/professionalPhotoFinal.jpg";

const Profile = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <main className="profile-wrapper">
      <section className="profile-card">

        {/* HUD */}
        <div className="profile-hud">
          <div className="hud-line"></div>
          <span>PROFILE_MODULE_ACTIVE</span>
        </div>

        {/* CONTENT */}
        <div className="profile-content">

          {/* LEFT: PHOTO */}
          <div className="profile-image">
            <img
              src={profileImg}
              alt="Profile"
              onClick={() => setShowImage(true)}
            />
          </div>

          {/* RIGHT: TEXT */}
          <div className="profile-text">
            <h1 className="profile-title">
              PROFILE <span>PAGE</span>
            </h1>

            <h2 className="profile-subtitle">
              FULL STACK / MERN DEVELOPER
            </h2>

            <p className="profile-description">
              I am a passionate Full Stack Developer focused on building
              scalable, efficient, and user-centric applications. I enjoy
              working across the entire stack — from clean UI design to
              robust backend architecture.
            </p>

            <p className="profile-description">
              My goal is to continuously improve my skills, build real-world
              projects, and deliver solutions that are reliable, maintainable,
              and future-ready.
            </p>

            {/* STATS */}
            <div className="profile-stats">
              <div className="stat-box">
                <span className="stat-value">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">MERN</span>
                <span className="stat-label">Stack</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">∞</span>
                <span className="stat-label">Learning</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* IMAGE MODAL */}
      {showImage && (
        <div className="image-modal" onClick={() => setShowImage(false)}>
          <img src={profileImg} alt="Full Profile" />
        </div>
      )}
    </main>
  );
};

export default Profile;
