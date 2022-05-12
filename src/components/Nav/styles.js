import styled, { keyframes } from "styled-components";
import keyboardIcon from "../../assets/keyboardIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";

const underlineGrow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const MainContainer = styled.div`
  color: #fefefe;
  height: 100vh;
  width: 175px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #1a1d23;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Logo = styled.div`
  height: 120px;
  width: 120px;
  background-image: url(${keyboardIcon});
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Links = styled.h2`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 4px;
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
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GithubLink = styled.div`
  background-image: url(${githubIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 35px;
  width: 35px;
  margin: 0 10px;
  cursor: pointer;
`;

export const TwitterLink = styled.div`
  background-image: url(${twitterIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 35px;
  width: 35px;
  margin: 0 10px;
  cursor: pointer;
`;
