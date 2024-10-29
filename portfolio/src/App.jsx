import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";

function App() {
  return (
    <Router>
      <div className="bg-white container mx-auto">
        <NavBar />
        <About />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Education />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
