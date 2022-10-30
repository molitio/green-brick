import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
`;

const StyledLeaderImage = styled.img`
  margin-bottom: -0.5em;

  width: 100vw;
  @media (max-width: 834px) {
    transform: scale(1.2);
    margin-top: 0.5em;
  }
  @media (max-width: 400px) {
    margin-bottom: 0;
  }
`;

const StyledImageLayer = styled.div`
  background-color: #2d2d2d;
`;

const StyledLeaderContent = styled.div`
  padding: 0 5.25em 0 5.25em;
  background-color: ${(props) => props.theme?.palette?.primary?.main};

  @media (max-width: 834px) {
    padding: 0 4.25em 4.25em;
  }

  @media (max-width: 400px) {
    padding: 0 2.25em 2.25em;
  }
`;

const StyledLeaderName = styled.h3`
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0;
  text-align: end;
  padding-bottom: 1em;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.palette.text.primary};
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: center;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 1em;
  margin: 0;
  font-size: 1.2em;

  @media (max-width: 834px) {
    padding: 4.5em 4.25em 4.25em;
  }
  @media (max-width: 500px) {
    padding: 4.5em 0em 4.25em 0em;
  }
`;

const Introduction: React.FC = () => {
  return (
    <StyledAbout>
      <StyledLeaderImage
        src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg`}
      />
      <StyledImageLayer>
        <StyledLeaderContent>
          <StyledParagraph>
            {`„ A legtöbb munkánkat személyes ajánlás alapján kapjuk, mivel minden 
munkánkat úgy végezzük mintha magunknak csinálnánk! ”
`}
          </StyledParagraph>
          <StyledLeaderName>{`- Idézet a Brüder Bau Kft. munkatársától`}</StyledLeaderName>
        </StyledLeaderContent>
      </StyledImageLayer>
    </StyledAbout>
  );
};

export default Introduction;
