import React from "react";
import styled from "styled-components";
import { StyledTheme } from "./types";
import { cardContentMock } from "./mock";
import { useTheme } from "@mui/material";

const StyledCardBoxCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const StyledImage = styled.div<StyledTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: ${(props) =>
    props && props.theme ? props.theme.palette.primary.main : "none"};
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  margin-bottom: 40px;
  flex: 25%;

  @media (max-width: 1075px) {
    flex: 50%;
  }
  @media (max-width: 800px) {
    flex: 100%;
  }
`;

const StyledCardImageContainer = styled.div<StyledTheme>`
  background-color: ${(props) =>
    props && props.theme
      ? props.theme.palette.background.default
      : "rgba(0,0,0,0.8)"};
  z-index: 1000;
  width: 130px;
  height: 130px;
  margin-right: 15px;
  justify-content: center;
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

const StyledCardTitle = styled.h2`
  margin-top: 0;
  font-family: Impact, Haettenschweiler;
`;

const StyledCardText = styled.p`
  margin-top: 0;
  text-align: initial;
`;

const CardBoxCard: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledCardBoxCards>
      {cardContentMock.map((cardData) => {
        return (
          <StyledCardContainer key={cardData.title}>
            <StyledCardImageContainer theme={theme}>
              <StyledImage theme={theme}>
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
              <StyledCardText style={{}}>{cardData.content}</StyledCardText>
            </StyledCardContent>
          </StyledCardContainer>
        );
      })}
    </StyledCardBoxCards>
  );
};

export default CardBoxCard;
