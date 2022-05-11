import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import {
  bitbotData,
  dreadlightData,
  paydayData,
  temocData,
} from "../components/Project/ProjectData";
import SectionHeader from "../components/SectionHeader";
import { SectionContainer } from "../components/SectionContainerElement";
import Skills from "../components/Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <SectionContainer>
        <SectionHeader title="Skills" id="skills" />
        <Skills />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader title="Projects" id="projects" />
        <Project {...bitbotData} />
        <Project {...dreadlightData} />
        <Project {...temocData} />
        <Project {...paydayData} />
      </SectionContainer>
    </>
  );
};

export default Home;
