import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";
import { useTheme } from "@mui/material";

const StyledAbout = styled.div`
  height: auto;
  position: relative;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 920px;
  width: 50vw;
  background-color: rgba(45, 45, 45, 0.8);

  @media (max-width: 834px) {
    width: 100vw;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  padding: 0px 0px 0px 70px;
  font-family: Impact, Haettenschweiler;
  font-size: 300%;
  font-weight: lighter;

  @media (max-width: 834px) {
    padding: 100px 0px 0px 70px;
  }
`;

const StyledTextContainer = styled.div`
  text-align: left;
  padding: 0px 0px 0px 70px;
  width: 60%;
`;

const StyledText = styled.h3`
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledAboutImage = styled.section`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/grindingmachine.jpg);
  height: 920px;
  background-size: cover;
  background-position: center;
  width: 100vw;
`;

const StyledParagraph = styled.p`
  width: 70vw;
  display: flex;
  flex-direction: row;
  text-align: start;
  padding-top: 30px;
  padding-bottom: 20px;
  margin: 0;
`;

const StyledLeaderImage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  object-fit: fill;
  padding-top: 4em;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg);
  height: 920px;
  background-size: cover;
  background-position: center;
  width: 100vw;
`;

const StyledLiderContent = styled.div<StyledTheme>`
  padding: 0 100px 0 100px;
  height: auto;
  background-color: ${(props) => props.theme?.palette?.primary?.main};
`;

const StyledLiderName = styled.h3`
  margin: 0;
  text-align: end;
  padding: 25px;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
`;

const StyledImageLayer = styled.div`
  background-color: #2d2d2d;
  height: auto;
`;

const About: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { id } = props;
  const theme = useTheme();

  return (
    <StyledAbout id={id}>
      <StyledAboutImage>
        <StyledContent>
          <StyledTitle>{`RÓLUNK`}</StyledTitle>
          <StyledTextContainer>
            <StyledText>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin diam et pulvinar accumsan. Aenean risus tortor, ullamcorper in pharetra congue, posuere nec neque. Donec semper, magna sed pellentesque fringilla, quam leo porttitor ante, et fringilla nunc velit eu arcu. Nam sit amet felis tortor.`}</StyledText>
          </StyledTextContainer>
          <StyledLogo>
            <img
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </StyledLogo>
        </StyledContent>
      </StyledAboutImage>
      <StyledLeaderImage>
        <StyledImageLayer>
          <StyledLiderContent theme={theme}>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sollicitudin diam et pulvinar accumsan. Aenean risus
              tortor, ullamcorper in pharetra congue, posuere nec neque.
            </StyledParagraph>
            <StyledLiderName>Kiss József, műszakvezető</StyledLiderName>
          </StyledLiderContent>
        </StyledImageLayer>
      </StyledLeaderImage>
    </StyledAbout>
  );
};

export default About;
