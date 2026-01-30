import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="stark-navbar">

      {/* LEFT: LOGO */}
      <div className="nav-left">
        <div className="stark-icon">
          <svg viewBox="0 0 48 48">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="nav-logo">RK(DEV)</span>
      </div>

      {/* CENTER LINKS (DESKTOP) */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Deployments</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Terminal</Link>
      </nav>

      {/* RIGHT: STATUS + TOGGLE */}
      <div className="nav-right">
        <span className="status-dot"></span>
        <span className="status-text">System Online</span>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/projects">Deployments</Link>
          <Link onClick={() => setMenuOpen(false)} to="/profile">Profile</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Terminal</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
