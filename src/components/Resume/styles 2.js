import styled, { keyframes } from "styled-components";

export const SkillsMainCont = styled.div`
  height: 100%;
  width: 80%;
  /* background-color: blue; */
  margin-left: 150px;
`;

export const RowContainersOne = styled.div`
  height: 45vh;
  margin: 10px 0;
  /* background-color: white; */
  display: flex;
`;

export const RowContainersTwo = styled.div`
  height: 45vh;
  margin: 10px 0;
  /* background-color: white; */
  display: flex;
`;

export const SectionBoxes = styled.div`
  /* background-color: green; */
  height: 400px;
  width: 50%;
  margin: 20px 20px;
`;

export const SummaryBox = styled.div`
  background-color: green;
  height: 400px;
  width: 50%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1a1d23;
  border-radius: 20px;
  :hover {
    border: solid white 2px;
  }

  h1 {
    margin-left: 20px;
    width: 33%;
  }

  h1,
  h3 {
    color: #fefefe;
  }

  h3 {
    font-weight: 400;
    margin-left: 35px;
    margin-right: 30px;
  }
`;

export const InterestsBox = styled.div`
  background-color: #1a1d23;
  border-radius: 20px;
  height: 300px;
  width: 50%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    border: solid white 2px;
  }

  h1 {
    margin-left: 20px;
    width: 30.5%;
  }

  h1,
  h3 {
    color: #fefefe;
  }

  h3 {
    font-weight: 400;
    margin-left: 35px;
  }
`;

export const TitleSkills = styled.h1`
  /* background-color: red; */
  color: #fefefe;
  margin-left: 20px;
  width: 33%;
`;

export const KeySkills = styled.div`
  background-color: #1a1d23;
  border-radius: 20px;
  /* background-color: purple; */
  height: 400px;
  width: 50%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    border: solid white 2px;
  }
`;

export const SkillsBox = styled.div`
  height: 200px;
  /* background-color: #fefefe; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IndivBoxes = styled.div`
  width: 35%;
  height: 30px;
  /* background-color: #fefefe; */
  opacity: 0.85;
  /* background-color: yellow; */
  text-align: center;
  border-radius: 15px;
  /* border: solid black 1px; */
  margin: 10px 10px;
  background-color: #efafbf;
  font-weight: 400;
  border: solid black 2px;
`;
export const InfoTitle = styled.h1`
  /* background-color: red; */
  color: #fefefe;
  margin-left: 20px;
  width: 15%;
`;

export const InfoBox = styled.div`
  background-color: #1a1d23;
  border-radius: 20px;
  /* background-color: purple; */
  height: 300px;
  width: 50%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    border: solid white 2px;
  }
`;

export const InfoInsideBox = styled.div`
  height: 200px;
  /* background-color: #fefefe; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IndivInfo = styled.div`
  width: 45%;
  height: 30px;
  /* background-color: yellow; */
  text-align: center;
  border-radius: 15px;
  /* border: solid black 1px; */
  margin: 10px 10px;
  background-color: #5ea9be;
  /* background-color: #fefefe; */
  font-weight: 400;
  opacity: 0.85;
  border: solid black 2px;
`;

const underlineGrow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const ResumeUnderline = styled.div`
  height: 2px;
  width: 100%;
  background: #fefefe;
  transform: scaleX(0);
  animation-name: ${(props) =>
    props.underlineAni === true && props.currHover === props.hoverID
      ? underlineGrow
      : ""};
  // animation-name: ${underlineGrow};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  transform-origin: left;
  margin-top: -10px;
  padding: 0;
`;
