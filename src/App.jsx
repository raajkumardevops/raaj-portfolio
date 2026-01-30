import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';

function app(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default app;