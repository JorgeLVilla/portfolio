import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75vh;
  /* border: solid white; */

  h1 {
    display: flex;
    justify-content: center;
    color: #fefefe;
    font-size: 95px;
    /* border: solid white; */
    /* margin-top: 20px; */
  }

  p {
    color: #fefefe;
    font-size: 22.5px;
    width: 500px;
    text-align: center;
  }

  h3 {
    color: #fefefe;
    font-size: 25px;
    font-weight: 800;
    text-decoration: underline;
    text-align: center;
  }
  .aboutIcon {
    height: 400px;
    margin-top: 225px;
    /* border: solid white; */
  }

  .deskIcon {
    height: 300px;
    margin-right: 100px;
    margin-bottom: 200px;
    /* border: solid white; */
  }
`;
