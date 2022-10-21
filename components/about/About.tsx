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

const About: React.FC = () => {
  return (
    <StyledAbout>
      <StyledAboutImage>
        <StyledContent>
          <StyledTitle>{`RÓLUNK`}</StyledTitle>
          <StyledTextContainer>
            <StyledText>{`A fellendülő piacnak köszönhetően az elmúlt években lehetőségünk 
adódott több, igazán nagyszerű projektet véghez vinni! Lendületünk azóta 
is töretlen, legtöbb megbízásunkat ajánlás útján szereztük. 
Szolgáltatásaink között szerepelnek új házak építése, lakóházak bővítése, 
generál kivitelezés és családi házak szerkezet építése is. Legutóbbi az ami 
mind közül a leglátványosabb rész, így bátran kijelenthetjük, hogy ezt a 
folyamatot szeretjük a legjobban!`}</StyledText>
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
    </StyledAbout>
  );
};

export default About;
