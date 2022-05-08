import React from "react";
import { FaBars, FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavSocials,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Hudson Samuels</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="skills">Skills</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavSocials href="https://github.com/EMERALD0874">
              <FaGithub />
            </NavSocials>
          </NavItem>
          <NavItem>
            <NavSocials href="https://emerald0874.itch.io/">
              <FaItchIo />
            </NavSocials>
          </NavItem>
          <NavItem>
            <NavSocials href="https://www.linkedin.com/in/hudson-samuels-b99092197/">
              <FaLinkedin />
            </NavSocials>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
