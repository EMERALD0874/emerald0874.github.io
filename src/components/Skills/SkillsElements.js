import styled from "styled-components";
import chroma from "chroma-js";
import { motion } from "framer-motion";

export const SkillBarWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 0fr));
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(auto, 0fr));
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(3, minmax(auto, 0fr));
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(auto, 0fr));
  }
`;

export const SkillBarContainer = styled(motion.div)`
  width: 180px;
  height: 250px;
  margin: 0 20px;
  justify-content: center;
  align-items: flex-start;
  size: "80px";
`;

export const SkillBarTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  top: -30px;
  position: relative;
`;

export const SkillBarSubtitle = styled.h1`
  font-size: 18px;
  text-align: center;
  top: -32px;
  position: relative;
  font-weight: 700;
  background: ${({ brandColor }) =>
    brandColor
      ? `-webkit-linear-gradient(${chroma(brandColor).brighten(0.25)},${chroma(
          brandColor
        ).darken(0.25)}), ${brandColor}`
      : `-webkit-linear-gradient(#FF37EF,#FCFF00), #FF37EF`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;
