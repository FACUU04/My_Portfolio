import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {
  return (
    <div className="bg-[#0d1117] text-[#f3f4f6] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
};

export default App;
