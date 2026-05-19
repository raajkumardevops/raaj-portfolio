import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import SkillDetails from "./pages/SkillDetails";

function App() {

  return (

    <Router>

      {/* =========================
          NAVBAR
      ========================== */}

      <Navbar />

      {/* =========================
          ROUTES
      ========================== */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* PROJECTS */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* SKILL DETAILS */}

        <Route
          path="/skills/:id"
          element={<SkillDetails />}
        />

        {/* ADMIN */}

        <Route
          path="/nkrk2909"
          element={<Admin />}
        />

      </Routes>

      {/* =========================
          FOOTER
      ========================== */}

      <Footer />

    </Router>

  );

}

export default App;