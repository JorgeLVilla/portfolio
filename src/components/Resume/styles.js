import styled, { keyframes } from "styled-components";
import { uiSize } from "../../utils/mobileSize";

export const SkillsMainCont = styled.div`
  /* height: 100%; */
  /* width: auto; */
  /* background-color: blue; */
  /* margin-left: 150px; */
  @media ${uiSize.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RowContainersOne = styled.div`
  /* height: 500px; */
  /* margin: 10px 0; */
  /* width: 300px; */
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  margin: 0 2em;
  /* border: solid white 10px; */
  @media ${uiSize.mobile} {
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
  }
`;

// export const SectionBoxes = styled.div`
//   background-color: green;
//   height: 400px;
//   width: 50%;
//   margin: 20px 20px;
//   @media ${uiSize.mobile} {
//     background-color: white;
//     border: solid green 5px;
//     height: 600px;
//   }
// `;

export const SummaryBox = styled.div`
  background-color: #1a1d23;
  /* height: 400px; */
  width: 45%;
  /* margin: 20px 20px; */
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
  justify-content: center;
  border-radius: 20px;
  :hover {
    border: solid white 2px;
  }

  h1 {
    margin: 1rem 0;
    margin-left: 1em;
    width: 33%;
    color: #fefefe;
    /* font-size: 2.5rem; */
  }

  h3 {
    margin: 0 1em;
    margin-bottom: 1em;
    font-weight: 400;
    font-size: 1em;
    color: #fefefe;
  }

  @media ${uiSize.mobile} {
    min-height: 500px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    text-align: center;
    /* border: solid green 5px; */
    font-size: 1.4rem;
    /* height: 600px; */
  }
`;

export const KeySkills = styled.div`
  background-color: #1a1d23;
  border-radius: 20px;
  /* background-color: purple; */
  /* height: 400px; */
  width: 45%;
  margin: 0.5em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    border: solid white 2px;
  }

  h1 {
    /* font-size: 1rem; */
    /* margin: 0.25em 0; */
    margin: 0.5rem 0;
    /* margin-left: 1em; */
    width: 100%;
    color: #fefefe;
    text-align: center;
  }

  @media ${uiSize.mobile} {
    /* background-color: coral; */
    width: 90%;
    font-size: 1.4rem;

    min-height: 500px;
    text-align: center;
    /* border: solid green 5px; */
    font-size: 1.4rem;

    h1 {
      /* font-size: 1.4rem; */
      /* background-color: red; */
      margin: 1rem 0;
      width: 100%;
    }
  }
`;

export const SkillsBox = styled.div`
  /* height: 200px; */
  /* background-color: #fefefe; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${uiSize.mobile} {
    /* background-color: coral; */
  }
`;

export const TitleSkills = styled.h1``;

export const IndivBoxes = styled.div`
  /* width: 35%;
  height: 30px; */
  /* background-color: #fefefe; */
  opacity: 0.85;
  /* background-color: yellow; */
  text-align: center;
  border-radius: 15px;
  /* border: solid black 1px; */
  margin: 10px 10px;
  /* background-color: #efafbf; */
  background-color: lightgray;
  font-weight: 400;
  border: solid black 2px;

  p {
    padding: 0.3em;
  }
`;

export const RowContainersTwo = styled.div`
  /* height: 500px; */
  margin: 0 1em;
  background-color: red;
  display: flex;
  justify-content: space-around;
  /* width: 300px; */
  @media (max-width: 565px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InterestsBox = styled.div`
  background-color: #1a1d23;
  border-radius: 20px;
  /* height: 300px; */
  width: 50%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  margin: 0.5rem 0.5rem;
  border-radius: 20px;

  :hover {
    border: solid white 2px;
  }

  h3 {
    /* text-align: center; */
    font-weight: 400;
    margin: 0 1rem;

    color: #fefefe;
  }

  h1 {
    margin: 0.5rem 0;
    margin-left: 1em;
    width: 30.5%;
    /* width: 100%; */
    color: #fefefe;
    text-align: center;
  }

  @media ${uiSize.mobile} {
    /* background-color: coral; */
    width: 90%;
    font-size: 1.4rem;

    min-height: 500px;
    text-align: center;
    /* border: solid green 5px; */
    font-size: 1.4rem;

    h1 {
      /* font-size: 1.4rem; */
      /* background-color: red; */
      margin: 1rem 0;
      width: 100%;
    }

    h3 {
      text-align: center;
    }
  }
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
