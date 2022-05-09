import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import {
  bitbotData,
  dreadlightData,
  temocData,
} from "../components/Project/ProjectData";

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
      <Project {...dreadlightData} />
      <Project {...bitbotData} />
      <Project {...temocData} />
    </>
  );
};

export default Home;
