import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  /* :before {
    content: " ";
    display: block;
    visibility: hidden;
    height: 80px;
  } */
`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 350px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ProjectRow = styled(motion.div)`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgLeft }) =>
    imgLeft ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const Subtitle = styled.p`
  background: -webkit-linear-gradient(#b79ced, #9266b0), #b79ced;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: ${({ imgLeft }) => (imgLeft ? `left` : `right`)};

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: ${({ imgLeft }) => (imgLeft ? `left` : `right`)};

  @media screen and (max-width: 768px) {
    text-align: left;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Note = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #f7ebff;
  text-align: ${({ imgLeft }) => (imgLeft ? `left` : `right`)};

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #ddd;
  text-align: ${({ imgLeft }) => (imgLeft ? `left` : `right`)};

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: ${({ imgLeft }) => (imgLeft ? `left` : `right`)};

  @media screen and (max-width: 768px) {
    justify-content: left;
  }

  > * {
    margin-right: 10px;
  }
  > *:last-child {
    margin-right: 0px;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  margin-bottom: 0px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0 0;
  padding-right: 0;
  border-radius: 12px;
`;
