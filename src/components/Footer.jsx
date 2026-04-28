import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="stark-footer">

  {/* LEFT */}
  <div className="footer-left">
    <span className="footer-logo">RK(DEV)</span>
  </div>

  {/* CENTER */}
  <div className="footer-center">
    <p className="footer-copy">
      © 2025 Raaj Kumar. All rights reserved.
    </p>
  </div>

  {/* RIGHT */}
  <div className="footer-links">
    <Link to="/">Home</Link>
    <Link to="/projects">Deployments</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/contact">Terminal</Link>
  </div>

</footer>
  );
};

export default Footer;