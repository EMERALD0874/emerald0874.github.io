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
      <SectionHeader title="Projects" id="projects" />
      <Project {...bitbotData} />
      <Project {...dreadlightData} />
      <Project {...temocData} />
      <Project {...paydayData} />
    </>
  );
};

export default Home;
