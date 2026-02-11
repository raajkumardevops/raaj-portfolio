import { useEffect, useState } from "react";
import "../styles/profile.css";
import profileImg from "../assets/professionalPhotoFinal.jpg";

const Profile = () => {
  const [showImage, setShowImage] = useState(false);

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
    <main className="profile-wrapper">
      <section className="profile-card reveal">

        {/* HUD */}
        <div className="profile-hud reveal delay-1">
          <div className="hud-line"></div>
          <span>PROFILE_MODULE_ACTIVE</span>
        </div>

        {/* CONTENT */}
        <div className="profile-content">

          {/* IMAGE */}
          <div className="profile-image reveal delay-2">
            <img
              src={profileImg}
              alt="Profile"
              onClick={() => setShowImage(true)}
            />
          </div>

          {/* TEXT */}
          <div className="profile-text reveal delay-3">
            <h1 className="profile-title">
              PROFILE <span>PAGE</span>
            </h1>

            <h2 className="profile-subtitle">
              FULL STACK / MERN DEVELOPER
            </h2>

            <p className="profile-description">
              I am a passionate Full Stack Developer focused on building
              scalable, efficient, and user-centric applications.
            </p>

            <p className="profile-description">
              My goal is to continuously improve my skills, build real-world
              projects, and deliver reliable, future-ready solutions.
            </p>

            <div className="profile-stats">
              <div className="stat-box reveal delay-1">
                <span className="stat-value">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-box reveal delay-2">
                <span className="stat-value">MERN</span>
                <span className="stat-label">Stack</span>
              </div>
              <div className="stat-box reveal delay-3">
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
