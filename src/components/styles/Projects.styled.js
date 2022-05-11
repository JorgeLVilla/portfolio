import styled from "styled-components";

export const StyledProjects = styled.div`
  height: 80vh;
  /* border: solid blue; */

  h1 {
    display: flex;
    justify-content: center;
    color: #fefefe;
    font-size: 95px;
    /* border: solid white; */
    margin-top: 0;
  }

  h3 {
    color: #fefefe;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SingleProjectCont = styled.div`
  height: 550px;
  width: 325px;
  background-color: #1a1d23;
  /* background-color: #000000; */
  border-radius: 25px;
  margin-top: 30px;
  /* border: solid white; */

  img {
    height: 35%;
    width: 100%;
    border-radius: 15px;
  }

  h1,
  h3 {
    margin: 0 auto;
    padding: 0 25px;
    text-align: center;
  }

  h1 {
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 5px;
    text-decoration: underline;
  }

  h3 {
    margin: 15px 10px;
    font-size: 15px;
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
  }

  div p {
    margin: 0;
    margin-top: 3px;
    padding: 0;
    text-align: center;
    font-size: 15px;
    font-weight: 650;
  }
`;
