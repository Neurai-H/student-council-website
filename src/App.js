import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

import Hero from "./components/Hero"
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Clubs from "./pages/Clubs";

function App() {
  return (
    <Router>
      <div className="">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;