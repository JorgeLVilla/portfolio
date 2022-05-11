import { StyledScroll } from "./styles/ScrollDown.styled";
import arrowIcon from "../assets/arrowIcon.svg";

const ScrollDown = () => {
  return (
    <StyledScroll>
      <p>Scroll down</p>
      <img src={arrowIcon} alt="arrow" />
    </StyledScroll>
  );
};

export default ScrollDown;
