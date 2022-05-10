import { StyledHome } from "./styles/Home.styled";
import heroIcon from "../assets/heroIcon.svg";
import keyboardIcon from "../assets/keyboardIcon.svg";

const Home = () => {
  return (
    <StyledHome>
      <div>
        <div className="hello">
          <h1>Hello,</h1>
          <img src={keyboardIcon} alt="keyboard" />
        </div>
        <h1>I am Jorge</h1>
        <h5>I design and build things for the web.</h5>
      </div>
      <div>
        <img src={heroIcon} alt="person doing work on couch with dog" />
      </div>
    </StyledHome>
  );
};

export default Home;
