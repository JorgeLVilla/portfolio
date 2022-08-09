import styled from "styled-components";
import { uiSize } from "../../utils/mobileSize";

export const StyledHome = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
  align-items: center;
  /* height: 90vh; */
  min-height: 100vh;
  /* max-height: 200px; */
  /* height: 100%; */
  /* margin-left: 100px; */
  /* background-color: red; */
  /* overflow: hidden; */

  .hello {
    display: flex;
  }

  h1,
  h5 {
    color: #fefefe;
    margin: 0 0;
    padding: 0 0;
  }

  h1 {
    font-size: 4rem;
  }

  h5 {
    font-size: 1rem;
  }

  img {
    margin-left: 80px;
    height: 480px;
    /* background-color: red; */
  }

  @media ${uiSize.mobile} {
    display: flex;
    flex-direction: column;
    /* margin-top: 2rem; */
    align-items: center;

    h1 {
      font-size: 3.5rem;
      /* width: 90%; */
      line-height: 4rem;
      /* background-color: white; */
    }

    h1,
    h5 {
      margin: 0;
      padding: 0;
      /* text-align: center; */
    }
    img {
      margin: 0 auto;
      height: 300px;
      padding: 0;
    }
  }
`;

export const GreetingContainer = styled.div`
  @media ${uiSize.mobile} {
    width: 90%;
    margin-top: 2em;
    text-align: center;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
