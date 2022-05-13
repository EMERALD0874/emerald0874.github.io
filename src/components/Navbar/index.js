import React from "react";
import { FaBars, FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
import { animateScroll as scroll } from "react-scroll";

const goHome = () => {
  scroll.scrollToTop({ duration: 500, spy: true, exact: true });
};

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={goHome}>
          Hudson Samuels
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavSocials href="https://github.com/EMERALD0874" target="_blank">
              <FaGithub />
            </NavSocials>
            <NavSocials href="https://emerald0874.itch.io/" target="_blank">
              <FaItchIo />
            </NavSocials>
            <NavSocials
              href="https://www.linkedin.com/in/hudson-samuels-b99092197/"
              target="_blank"
            >
              <FaLinkedin />
            </NavSocials>
            <NavSocials href="mailto:info@hudsonsamuels.com" target="_blank">
              <MdEmail />
            </NavSocials>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
