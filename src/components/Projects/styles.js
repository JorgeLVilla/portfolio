import styled, { keyframes } from "styled-components";
import { uiSize } from "../../utils/mobileSize";

export const StyledProjects = styled.div`
  /* height: 100vh; */
  /* background-color: white; */
  margin-bottom: 100px;

  h1 {
    display: flex;
    justify-content: center;
    color: #fefefe;
    font-size: 4rem;
    margin-top: 20px;
  }

  h3 {
    color: #fefefe;
  }
  .pokeLineProj {
    width: 188px;
    margin: 0 auto;
  }

  .movieLineProj {
    width: 160px;
    margin: 0 auto;
  }

  .gameLineProj {
    width: 230px;
    margin: 0 auto;
  }

  .amazonLineProj {
    width: 206px;
    margin: 0 auto;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  /* background-color: red; */
  @media ${uiSize.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SingleProjectCont = styled.div`
  height: 700px;
  width: 300px !important;
  margin: 0 30px;
  background-color: #1a1d23;
  /* background-color: blue; */
  border-radius: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${uiSize.mobile} {
    margin: 20px 10px;
  }

  img {
    height: 31%;
    width: 100%;
    border-radius: 15px;
  }

  .gameImgSize {
    margin: 0px 0px;
  }

  h1 {
    text-align: center;
    padding: 0 10px;
    font-size: 25px;
    margin-top: 15px;
  }

  h3 {
    font-size: 15px;
  }

  span {
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: #fefefe;
    text-decoration: underline;
    font-weight: bolder;
  }
  /* @media ${uiSize.mobile} {
    width: 90%;
  } */
`;

export const DemoBLock = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  margin-bottom: 10px;

  div {
    background-color: #fefefe;
    height: 25px;
    width: 100px;
    border-radius: 15px;
    cursor: pointer;
    margin: 10px;
  }

  div p {
    margin: 0;
    margin-top: 2px;
    padding: 0;
    text-align: center;
    font-size: 15px;
    font-weight: 650;
    /* background-color: green; */
    color: #000000;
  }
`;

const underlineGrow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const ProjUnderline = styled.div`
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
  margin-top: -5px;
  padding: 0;
`;

export const DescriptionText = styled.div`
  /* background-color: coral; */
  padding: 5px 10px;
  height: 45%;
  margin: 10px;

  @media ${uiSize.mobile} {
    text-align: center;
  }
`;
