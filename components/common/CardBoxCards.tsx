import React from "react";
import styled from "styled-components";
import { StyledTheme } from "./types";
import { cardContentMock } from "./mock";

const StyledCardBoxCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 9.375em;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.125em;
  height: 8.125em;
  background-color: ${(props) =>
    props && props.theme ? props.theme.palette.primary.main : "none"};
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.188em;
  margin-bottom: 1.25em;
  flex: 25%;

  @media (max-width: 1075px) {
    flex: 50%;
  }
  @media (max-width: 800px) {
    flex: 100%;
  }
`;

const StyledCardImageContainer = styled.div`
  background-color: ${(props) =>
    props && props.theme
      ? props.theme.palette.background.default
      : "rgba(0,0,0,0.8)"};
  z-index: 1;
  width: 8.125em;
  height: 8.125em;
  margin-right: 0.938em;
  justify-content: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.565);
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 7.5em;
`;

const StyledCardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const StyledCardText = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
`;

const CardBoxCard: React.FC = () => {
  return (
    <StyledCardBoxCards>
      {cardContentMock.map((cardData) => {
        return (
          <StyledCardContainer key={cardData.title}>
            <StyledCardImageContainer>
              <StyledImage>
                <img
                  style={{ opacity: "0.4" }}
                  width={92.15}
                  height={76.02}
                  src={`${cardData.url}`}
                  alt={`${cardData.title}`}
                />
              </StyledImage>
            </StyledCardImageContainer>
            <StyledCardContent>
              <StyledCardTitle>{cardData.title}</StyledCardTitle>
              <StyledCardText>{cardData.content}</StyledCardText>
            </StyledCardContent>
          </StyledCardContainer>
        );
      })}
    </StyledCardBoxCards>
  );
};

export default CardBoxCard;
