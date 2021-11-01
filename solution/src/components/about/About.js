import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About Fullstack Web Developer <span>Hilmi</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Hilmi.</h1>
        <h2>I’m currently learning Full-Stack Development Languages.</h2>

        <h2>
          <a href="mailto:hilmisarioglu1423@gmail.com">Send email</a> :
          hilmisarioglu1423@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
