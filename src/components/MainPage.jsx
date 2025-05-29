// src/components/mainpage.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Technical_Skills";
import Project from "./Project";
import Certificates from "./Certificates";
import Societies from "./Societies";
import Contact from "./Contact";

const MainPage = () => {
  const scrollToSection = (sectionId) =>{
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5 }}
      className="main-page"
    >
      
      <Navbar scrollToSection={scrollToSection}/>
      <About />
      <Education/>
      <Experience />
      <Skills />
      <Project />
      <Certificates />
      <Societies />
      <Contact />
    </motion.div>
  );
};

export default MainPage;
