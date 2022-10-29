import React from "react";
import Navbar from "./Component/Navbar";
import "./App.css";
import Hero from "./Component/Hero";
import Stack from "./Component/Stack";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
