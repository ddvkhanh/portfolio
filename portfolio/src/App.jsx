import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import { Slide } from "react-awesome-reveal";


function App() {
  return (
    <div className="">
      <Router>
        <div className="bg-white mx-auto">
          <NavBar />
          <Slide cascade damping={0.1} triggerOnce>
            <About />
            <Skills />
            <hr />
            <Experience />
            <hr />
            <Projects />
            <Education />
          </Slide>
          <Footer />
        </div>
      </Router>
    </div>

  );
}

export default App;
