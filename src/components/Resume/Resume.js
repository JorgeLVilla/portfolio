import {
  SkillsMainCont,
  RowContainersOne,
  RowContainersTwo,
  SummaryBox,
  InterestsBox,
  KeySkills,
  IndivBoxes,
  InfoBox,
  TitleSkills,
  SkillsBox,
  InfoTitle,
  InfoInsideBox,
  IndivInfo,
} from "./styles";
import { resumeVariant, hoverSectionVariant } from "./variants";
import { ResumeUnderline } from "./styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const [underlineAni, setUnderlineAni] = useState(false);
  const [currHover, setCurrHover] = useState("");

  const hoverAction = (hoverID) => {
    setUnderlineAni(true);
    setCurrHover(hoverID);
  };

  const [resumeContainerRef, resumeContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <SkillsMainCont
      id="resume-section"
      ref={resumeContainerRef}
      as={motion.div}
      variants={resumeVariant}
      initial="hidden"
      animate={resumeContainerInView ? "visible" : "hidden"}
    >
      <RowContainersOne>
        <SummaryBox
          as={motion.div}
          variants={hoverSectionVariant}
          whileHover={"hover"}
          onMouseEnter={() => hoverAction("summary")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <h1>
            Summary
            <ResumeUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="summary"
            />
          </h1>
          <h3>
            Jorge has recently started his journey in the tech industry as an
            apprentice developer. Self-motivated learner with strong time
            management, and communication skills. Able to work independently and
            collaboratively in a team with meticulous attention to detail.
          </h3>
        </SummaryBox>
        <KeySkills
          as={motion.div}
          variants={hoverSectionVariant}
          whileHover={"hover"}
          onMouseEnter={() => hoverAction("keySkills")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <h1>
            Key Skills
            <ResumeUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="keySkills"
            />
          </h1>

          <SkillsBox>
            <IndivBoxes>
              <p>React</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>JavaScript</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>TypeScript</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>Semantic HTML</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>Advanced CSS</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>Figma</p>
            </IndivBoxes>
            <IndivBoxes>
              <p>Adobe Creative Suite</p>
            </IndivBoxes>
          </SkillsBox>
        </KeySkills>
      </RowContainersOne>

      <RowContainersTwo>
        <InterestsBox
          as={motion.div}
          variants={hoverSectionVariant}
          whileHover={"hover"}
          onMouseEnter={() => hoverAction("interests")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <h1>
            Interests
            <ResumeUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="interests"
            />
          </h1>

          <h3>-Learning new software in the gaming space.</h3>
          <h3>-Exploring design in the web development.</h3>
          <h3>-Playing electric guitar with friends.</h3>
          <h3>-Building keyboards and playing video games.</h3>
        </InterestsBox>
        <InfoBox
          as={motion.div}
          variants={hoverSectionVariant}
          whileHover={"hover"}
          onMouseEnter={() => hoverAction("info")}
          onMouseLeave={() => setUnderlineAni(false)}
        >
          <InfoTitle>
            Info
            <ResumeUnderline
              underlineAni={underlineAni}
              currHover={currHover}
              hoverID="info"
            />
          </InfoTitle>
          <InfoInsideBox>
            <IndivInfo> www.jorgewolftown.com</IndivInfo>
            <IndivInfo>San Diego, California</IndivInfo>
            <IndivInfo>Linked In: Jorge Villalobos </IndivInfo>
            <IndivInfo>Github: JorgeLVilla</IndivInfo>
            <IndivInfo>jorrgee.4l@gmail.com</IndivInfo>
            <IndivInfo>Phone: 619.808.1567</IndivInfo>
          </InfoInsideBox>
        </InfoBox>
      </RowContainersTwo>
    </SkillsMainCont>
  );
};

export default Resume;
