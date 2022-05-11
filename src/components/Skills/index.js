import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {
  SkillBarWrapper,
  SkillBarContainer,
  SkillBarTitle,
  SkillBarSubtitle,
} from "./SkillsElements";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import {
  SiDiscord,
  SiAdobephotoshop,
  SiSteam,
  SiUnity,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiCsharp,
  SiC,
  SiCplusplus,
  SiMicrosoftoffice,
  SiLinux,
  SiWindows,
  SiMacos,
  SiPython,
  SiJava,
  SiDocker,
  SiAdobepremierepro,
} from "react-icons/si";
import "react-circular-progressbar/dist/styles.css";

const SkillLevelEnum = {
  Beginner: { text: "Novice", value: 25 },
  Intermediate: { text: "Intermediate", value: 50 },
  Advanced: { text: "Advanced", value: 75 },
  Expert: { text: "Expert", value: 100 },

  Certified: { text: "Certified", value: 100 },
  CertifiedMod: { text: "Certified Mod", value: 100 },
};

const Skills = () => {
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
      <SkillBarWrapper
        ref={ref}
        initial={{ y: 10, opacity: 0 }}
        animate={animation}
      >
        <SkillBar
          title={"C"}
          logo={SiC}
          brandColor={"#A8B9CC"}
          skillLevel={SkillLevelEnum.Beginner}
        />
        <SkillBar
          title={"C#"}
          logo={SiCsharp}
          brandColor={"#239120"}
          skillLevel={SkillLevelEnum.Expert}
        />
        <SkillBar
          title={"C++"}
          logo={SiCplusplus}
          brandColor={"#00599C"}
          skillLevel={SkillLevelEnum.Intermediate}
        />
        <SkillBar
          title={"Discord"}
          logo={SiDiscord}
          brandColor={"#5865F2"}
          skillLevel={SkillLevelEnum.CertifiedMod}
        />
        <SkillBar
          title={"Docker"}
          logo={SiDocker}
          brandColor={"#2496ED"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"Git"}
          logo={SiGit}
          brandColor={"#F05032"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"Java"}
          logo={SiJava}
          brandColor={"#007396"}
          skillLevel={SkillLevelEnum.Expert}
        />
        <SkillBar
          title={"Linux"}
          logo={SiLinux}
          brandColor={"#FCC624"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"MacOS"}
          logo={SiMacos}
          brandColor={"#FFF"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"Node.js"}
          logo={SiNodedotjs}
          brandColor={"#339933"}
          skillLevel={SkillLevelEnum.Intermediate}
        />
        <SkillBar
          title={"Office"}
          logo={SiMicrosoftoffice}
          brandColor={"#D83B01"}
          skillLevel={SkillLevelEnum.Expert}
        />
        <SkillBar
          title={"Photoshop"}
          logo={SiAdobephotoshop}
          brandColor={"#31A8FF"}
          skillLevel={SkillLevelEnum.Certified}
        />
        <SkillBar
          title={"Premiere Pro"}
          logo={SiAdobepremierepro}
          brandColor={"#9999FF"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"Python"}
          logo={SiPython}
          brandColor={"#3776AB"}
          skillLevel={SkillLevelEnum.Beginner}
        />
        <SkillBar
          title={"React"}
          logo={SiReact}
          brandColor={"#61DAFB"}
          skillLevel={SkillLevelEnum.Intermediate}
        />
        <SkillBar
          title={"Steamworks"}
          logo={SiSteam}
          brandColor={"#fff"}
          skillLevel={SkillLevelEnum.Intermediate}
        />
        <SkillBar
          title={"Unity"}
          logo={SiUnity}
          brandColor={"#fff"}
          skillLevel={SkillLevelEnum.Advanced}
        />
        <SkillBar
          title={"Windows 7+"}
          logo={SiWindows}
          brandColor={"#0078D6"}
          skillLevel={SkillLevelEnum.Expert}
        />
      </SkillBarWrapper>
    </>
  );
};

const SkillBar = ({ title, skillLevel, logo, brandColor }) => {
  const { ref, inView } = useInView();
  const [skillLevelAnimated, updateSkillLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      updateSkillLevel(skillLevel.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <SkillBarContainer ref={ref}>
      <CircularProgressbarWithChildren
        value={skillLevelAnimated}
        circleRatio={0.7}
        strokeWidth={10}
        styles={buildStyles({
          rotation: 0.65,
          strokeLinecap: "round",
          pathColor: brandColor,
          trailColor: "#171717",
          textColor: "#000",
          pathTransitionDuration: 1.5,
        })}
      >
        {React.createElement(logo, { size: "80px" })}
      </CircularProgressbarWithChildren>
      <SkillBarTitle>{title}</SkillBarTitle>
      <SkillBarSubtitle brandColor={brandColor}>
        {skillLevel.text}
      </SkillBarSubtitle>
    </SkillBarContainer>
  );
};

export default Skills;
