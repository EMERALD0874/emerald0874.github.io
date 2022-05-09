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
      <HeroAvatar src={Avatar} />
      <HeroContent>
        <HeroH1>Hello, I'm Hudson!</HeroH1>
        <HeroP>
          I am a full stack developer that enjoys programming as a hobby and a
          job. I have an interest in all sorts of things, from designing video
          games to programming Discord bots.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
