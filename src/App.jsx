import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact'

function app(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default app;