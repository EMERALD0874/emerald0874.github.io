import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  background: -webkit-linear-gradient(#b79ced, #9266b0), #9266b0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroAvatar = styled(motion.img)`
  height: 600px;
  z-index: 2;
  position: absolute;
  right: 0px;
  opacity: 50%;

  /* @media screen and (max-width: 1400px) {
    opacity: 50%;
  } */
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 800px;
  position: absolute;
  padding: 8px 24px;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media screen and (max-width: 1000px) {
    // make content show in the center instead
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #f7ebff;
  font-size: 24px;
  text-align: left;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
