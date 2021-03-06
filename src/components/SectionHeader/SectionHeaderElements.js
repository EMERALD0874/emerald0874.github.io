import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  background: -webkit-linear-gradient(#b79ced, #9266b0), #b79ced;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
