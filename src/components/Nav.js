import { StyledNav } from "./styles/Nav.styled";
import avatarIcon from "../assets/avatarIcon.svg";
import folderIcon from "../assets/folderIcon.svg";
import mailIcon from "../assets/mailIcon.svg";
import maletaIcon from "../assets/maletaIcon.svg";
import githubIcon from "../assets/githubIcon.svg";
import twitter2 from "../assets/twitterIcon.svg";
import keyboardIcon from "../assets/keyboardIcon.svg";

const Nav = () => {
  return (
    <StyledNav>
      <div className="homeIcon">
        <img src={keyboardIcon} alt="wolf icon" />
      </div>

      <div>
        <p>Projects</p>
        <img src={folderIcon} alt="folder icon" />
      </div>

      <div>
        <p>About</p>
        <img src={avatarIcon} alt="avatar icon" />
      </div>

      <div>
        <p>Resume</p>
        <img src={maletaIcon} alt="satchel icon" />
      </div>

      <div>
        <p>Contact</p>
        <img src={mailIcon} alt="mail icon" />
      </div>

      <div className="socialIcons">
        <img src={githubIcon} alt="github icon" />

        <img src={twitter2} alt="satchel icon" />
      </div>
    </StyledNav>
  );
};

export default Nav;
