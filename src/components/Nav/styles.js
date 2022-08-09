import styled, { keyframes } from "styled-components";
import keyboardIcon from "../../assets/keyboardIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import hamMenu from "../../assets/hamMenu.svg";
import { uiSize } from "../../utils/mobileSize";

const underlineGrow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const MainContainer = styled.div`
  //Vertical Nav
  /* color: #fefefe;
  height: 100vh;
  width: 175px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #1a1d23;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */

  //Horizontal Nav
  color: #fefefe;
  height: 60px;
  width: 100%;
  position: fixed;
  /* 
  left: 0;
  top: 0; */
  background-color: #1a1d23;
  /* border: solid white 2px; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  z-index: 999;
  opacity: 0.995;

  @media ${uiSize.mobile} {
    /* position: fixed; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: coral;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 4em;

    /* transform: translateY(-100%); */
    height: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-content: center;
  align-self: center;
  /* background-color: red; */
  /* margin: 10px 10px; */
  @media (max-width: 565px) {
    /* justify-content: center; */
    justify-content: center;

    /* height: 100%; */
  }
`;

export const Logo = styled.div`
  height: 3rem;
  width: 90px;
  background-image: url(${keyboardIcon});
  background-position: center;
  background-repeat: no-repeat;
  @media ${uiSize.mobile} {
    height: 3.5rem;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  /* margin: 10px 10px; */

  /* background-color: blue; */
  @media (max-width: 565px) {
    /* background-color: coral; */
    flex-direction: column;
    gap: 1.5em;
    overflow: hidden;
    /* max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
    /* height: 100%; */
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  cursor: pointer;
  /* margin-top: 15px; */
  /* background-color: red; */

  /* :not(:last-child) {
    margin-bottom: 15px;
  } */
`;

export const Links = styled.h2`
  font-size: 1rem;
  line-height: 24px;
  /* margin-bottom: 4px; */
  @media ${uiSize.mobile} {
    font-size: 1.5rem;
  }
`;

export const LinkUnderline = styled.div`
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
`;

export const SocialContainer = styled.div`
  height: 50px;
  width: 100%;
  /* margin: 10px 0px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  /* background-color: red; */
  @media (max-width: 565px) {
    /* background-color: coral; */
    justify-content: center;
    overflow: hidden;

    /* height: 100%; */
  }
`;

export const GithubLink = styled.div`
  background-image: url(${githubIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 1.8rem;
  width: 35px;
  margin: 0px 10px;
  cursor: pointer;
  /* background-color: white; */
`;

export const TwitterLink = styled.div`
  /* background-color: white; */
  background-image: url(${twitterIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 1.8rem;
  aspect-ratio: 1;
  margin: 0px 10px;
  cursor: pointer;
`;

export const HamburgerNav = styled.div`
  /* @media (max-width: 35em) {
    background-image: url(${hamMenu});
    height: 60px;
    aspect-ratio: 1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 100;
    position: absolute;
    top: 2rem;
    right: 2rem;
  } */

  background-image: url(${hamMenu});
  height: 60px;
  aspect-ratio: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 100;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 565px) {
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */

    display: block;
    /* position: fixed; */
    z-index: 10000;
    background-color: white;
    /* width: 100%; */
  }
`;
