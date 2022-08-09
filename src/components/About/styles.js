import styled from "styled-components";
import { uiSize } from "../../utils/mobileSize";

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* min-height: 100%; */
  width: auto;
  margin: 70px 0;
  /* background-color: blue; */

  h1 {
    display: flex;
    justify-content: center;
    color: #fefefe;
    font-size: 4rem;
  }

  p {
    color: #fefefe;
    font-size: 1.25rem;
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
  }

  .deskIcon {
    height: 300px;
    margin-right: 100px;
    margin-bottom: 200px;
    /* border: solid orange 5px; */
  }

  @media ${uiSize.mobile} {
    min-height: 700px;
    /* margin-top: -1rem; */
    /* border: solid red 2px; */
    /* max-width: rem; */

    .aboutIcon,
    .deskIcon {
      display: none;
    }

    h1 {
      font-size: 4rem;
    }
    p {
      width: 100%;
      font-size: 1.3rem;
    }
    h3 {
      margin-top: 2rem;
    }
  }
`;

export const AboutContainer = styled.div`
  /* border: solid yellow 5px; */

  @media ${uiSize.mobile} {
    width: 90%;
    min-height: 700px;

    /* height: 100%; */
  }
`;
