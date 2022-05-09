import React from "react";
import "./index.css";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  TextWrapper,
  Subtitle,
  Title,
  Description,
  BtnWrap,
  Column1,
  Column2,
  Img,
  ImgWrap,
} from "./ProjectElements";
import { ButtonLink } from "../ButtonElements";

const Project = ({
  id,
  subtitle,
  title,
  description,
  website,
  source,
  img,
  imgAlt,
  imgLeft,
}) => {
  return (
    <>
      <ProjectContainer id={id}>
        <ProjectWrapper>
          <ProjectRow imgLeft={imgLeft}>
            <Column1>
              <TextWrapper>
                <Subtitle imgLeft={imgLeft}>{subtitle}</Subtitle>
                <Title imgLeft={imgLeft}>{title}</Title>
                <Description imgLeft={imgLeft}>{description}</Description>
                <BtnWrap id="buttons" imgLeft={imgLeft}>
                  {website && (
                    <ButtonLink href={website} target="_blank">
                      Website
                    </ButtonLink>
                  )}
                  {source && (
                    <ButtonLink href={source} target="_blank">
                      Repository
                    </ButtonLink>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={imgAlt} title={imgAlt} />
              </ImgWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
