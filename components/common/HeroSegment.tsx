import React from "react";
import styled from "styled-components";
import HeroSegmentContent from "../common/HeroSegmentContent";
import { GreenBrickContext } from "../context";
import { StyledTheme } from "./types";

const StyledHeroSegment = styled.div`
  position: relative;
  //margin-top: -5em;
`;

const StyledBox = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  min-height: ${(props) => props.theme.dimensions.page.height};
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme?.palette?.primary?.main};
  color: ${(props) => props.theme?.palette?.text?.primary};
  font-family: Helvetica, Arial, sans-serif;
  padding: 0.93em 0.62em 0.93em 0.62em;
  border: 1px solid white;
  cursor: pointer;
  @media (max-width: 834px) {
    padding: 0.68em 0.43em 0.68em 0.43em;
  }
`;

const StyledImg = styled.section`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero.jpg);
  min-height: ${(props) => props.theme.dimensions.page.height};
  background-size: cover;
  background-position: center;
  width: 100vw;

  @media (max-width: 834px) {
  }
`;

const HeroSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 12em;
  justify-content: flex-end;
`;

const ContactLink = styled.a``;

const HeroSegment: React.FC = (props) => {
  const greenBrickContext = React.useContext(GreenBrickContext);
  const navTree = greenBrickContext.navTree ?? {};

  return (
    <StyledHeroSegment>
      <StyledImg>
        <StyledBox>
          <HeroSegmentContainer>
            <HeroSegmentContent
              title={"MEGBÍZHATÓSÁG, SZAKÉRTELEM"}
              description={
                "BÍZZA OTTHONÁT, GYORS, PRECIZ, HOZZÁÉRTŐ SZAKEMBEREKRE!"
              }
              callToAction={
                <ContactLink
                  key={navTree.contact.path}
                  href={navTree.contact.path}
                >
                  <StyledButton>{`KAPCSOLATFELVÉTEL`}</StyledButton>
                </ContactLink>
              }
            />
          </HeroSegmentContainer>
        </StyledBox>
      </StyledImg>
    </StyledHeroSegment>
  );
};

export default HeroSegment;
