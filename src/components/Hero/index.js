import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroAvatar,
} from "./HeroElements";
import Avatar from "../../images/avatar_themed.png";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg />
      <HeroAvatar
        src={Avatar}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1.0 }}
      />
      <HeroContent>
        <HeroH1>Hello, I'm Hudson!</HeroH1>
        <HeroP>
          I am a freelance full stack developer, game designer, and graphic
          designer from Dallas, Texas.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
