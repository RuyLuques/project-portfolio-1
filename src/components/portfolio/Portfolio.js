import React from "react";
import About from "../../pages/about/About";
import Education from "../../pages/education/Education";
import Experience from "../../pages/experience/Experience";
import Services from "../../pages/services/Services";
import Projects from "../../pages/projects/Projects";
import Technology from "../../pages/technology/Technology";
import Skills from "../../pages/skills/Skills";

const Home = () => {
  return (
    <>
      <section className="container">
        <About />
        <Experience/>
        <Services />
        <Skills/>
        <Technology />
        <Projects />
        <Education/>
      </section>
    </>
  );
};

export default Home;
