import styled, { keyframes } from "styled-components";

export const StyledProjects = styled.div`
  height: 100vh;
  /* background-color: green; */

  h1 {
    display: flex;
    justify-content: center;
    color: #fefefe;
    font-size: 95px;
    margin-top: 20px;
    /* margin-bottom: 0; */
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
  /* background-color: blue; */
  margin-top: 50px;
`;

export const SingleProjectCont = styled.div`
  height: 600px;
  width: 20%;
  margin: 0 2% 0 2%;
  /* min-width: 300px; */
  background-color: #1a1d23;
  /* background-color: red; */
  border-radius: 25px;
  /* margin-top: 50px;
  margin-left: 80px; */
  /* margin-right: 80px; */
  align-items: center;

  img {
    height: 31%;
    border-radius: 15px;
  }

  .gameImgSize {
    margin: 0px 0px;
  }

  h1,
  h3 {
    margin: 0 auto;
    padding: 0 10px;
    text-align: center;
  }

  h1 {
    font-size: 25px;
    margin-top: 15px;
  }

  h3 {
    margin: 5px 10px;
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
`;

export const DemoBLock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  div {
    background-color: #fefefe;
    height: 25px;
    width: 100px;
    border-radius: 15px;
    cursor: pointer;
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
