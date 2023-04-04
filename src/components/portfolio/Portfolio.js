import React from "react";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Education from "../../pages/education/Education";
import Experience from "../../pages/experience/Experience";
import Projects from "../../pages/projects/Projects";
import Technology from "../../pages/technology/Technology";
import Services from "../../pages/services/Services";
import Contact from "../../pages/contact/Contact";

const Home = () => {
  return (
    <>
      <section className="container">
        <About />
        <Skills/>
        <Education/>
        <Experience/>
        <Projects />
        <Technology />
        <Services />
        <Contact />
      </section>
    </>
  );
};

export default Home;
