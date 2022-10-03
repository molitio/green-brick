import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  position: relative;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: ${(props) => props.theme.dimensions.page.height};
  width: 50vw;
  background-color: rgba(45, 45, 45, 0.8);

  @media (max-width: 834px) {
    width: 100vw;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  padding: 1em 0 0 1.5em;
  font-size: 3rem;

  @media (max-width: 834px) {
    padding: 2em 0 0 1.5em;
    margin-bottom: 0;
  }
`;

const StyledTextContainer = styled.div`
  text-align: center;
  padding: 0 0 0 4.375em;
  width: 60%;
`;

const StyledText = styled.h3`
  text-align: start;
  color: white;
  font-family: Helvetica, arial, sans-serif;
  font-weight: lighter;
  font-size: 1.4rem;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledAboutImage = styled.section`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/grindingmachine.jpg);
  background-size: cover;
  background-position: center;
  width: 100vw;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.palette.text.primary};
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: center;
  text-align: start;
  padding-top: 1.875em;
  padding-bottom: 1.25em;
  margin: 0;
  @media (max-width: 834px) {
  }
`;

const StyledLeaderImage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  object-fit: fill;
  padding-top: 4em;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg);
  min-height: ${(props) => props.theme.dimensions.page.height};
  background-size: cover;
  width: 100vw;
  background-position: top 35% right 60%;

  @media (max-width: 834px) {
    background-size: cover;
    background-position: top 35% right 60%;
  }

  @media (max-width: 400px) {
    background-position: top 0% right 60%;
    background-size: 41.25em;
    background-repeat: no-repeat;
    padding-top: 0em;
  }
`;

const StyledLeaderContent = styled.div`
  padding: 0 6.25em 0 6.25em;
  background-color: ${(props) => props.theme?.palette?.primary?.main};

  @media (max-width: 834px) {
    padding: 0 4.25em 4.25em;
  }

  @media (max-width: 400px) {
    padding: 0 2.25em 2.25em;
    height: 490px;
  }
`;

const StyledLeaderName = styled.h3`
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0;
  text-align: end;
  padding: 1.56em;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
`;

const StyledImageLayer = styled.div`
  background-color: #2d2d2d;
  margin-top: auto;
`;

const About: React.FC = (props) => {
  return (
    <StyledAbout>
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
          <StyledLeaderContent>
            <StyledParagraph>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sollicitudin diam et pulvinar accumsan. Aenean risus
              tortor, ullamcorper in pharetra congue, posuere nec neque.`}
            </StyledParagraph>
            <StyledLeaderName>{`Kiss József, műszakvezető`}</StyledLeaderName>
          </StyledLeaderContent>
        </StyledImageLayer>
      </StyledLeaderImage>
    </StyledAbout>
  );
};

export default About;
