import React, { useEffect } from "react";
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
  Note,
} from "./ProjectElements";
import { ButtonLink } from "../ButtonElements";
import { ScrollAnchor } from "../ScrollAnchorElement";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Project = ({
  id,
  subtitle,
  title,
  note,
  description,
  website,
  source,
  img,
  imgAlt,
  imgLeft,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.0 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <ProjectContainer>
        <ScrollAnchor id={id} />
        <ProjectWrapper>
          <ProjectRow
            ref={ref}
            imgLeft={imgLeft}
            initial={{ y: 10, opacity: 0 }}
            animate={animation}
          >
            <Column1>
              <TextWrapper>
                <Subtitle imgLeft={imgLeft}>{subtitle}</Subtitle>
                <Title imgLeft={imgLeft}>{title}</Title>
                <Note imgLeft={imgLeft}>{note && note}</Note>
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
