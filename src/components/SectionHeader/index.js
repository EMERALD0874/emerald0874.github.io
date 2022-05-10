import React from "react";
import { HeaderContainer, HeaderTitle } from "./SectionHeaderElements";

const SectionHeader = ({ id, title }) => {
  return (
    <>
      <HeaderContainer id={id}>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
    </>
  );
};

export default SectionHeader;
