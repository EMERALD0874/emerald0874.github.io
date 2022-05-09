import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SidebarSocials,
  Social,
} from "./SidebarElements";
import { FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarSocials>
            <Social href="https://github.com/EMERALD0874" target="_blank">
              <FaGithub />
            </Social>
            <Social href="https://emerald0874.itch.io/" target="_blank">
              <FaItchIo />
            </Social>
            <Social
              href="https://www.linkedin.com/in/hudson-samuels-b99092197/"
              target="_blank"
            >
              <FaLinkedin />
            </Social>
            <Social href="mailto:info@hudsonsamuels.com" target="_blank">
              <MdEmail />
            </Social>
          </SidebarSocials>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
