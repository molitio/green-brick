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
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5em;
  height: 9.5em;
  background-color: ${(props) =>
    props && props.theme ? props.theme.palette.primary.main : "none"};
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17em;
  margin-bottom: 1.25em;
  flex: 25%;

  @media (max-width: 1275px) {
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
  width: 9.5em;
  height: 9.5em;
  margin-right: 0.938em;
  justify-content: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.565);
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 11em;
`;

const StyledCardTitleNewBuild = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 1.9em;
`;
const StyledCardTitleExpansion = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 1.9em;
`;
const StyledCardTitleFenceConstruction = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 0.8em;
`;
const StyledCardTitleGeneral = styled.h2`
  margin-top: 0;
  margin-bottom: 1.2em;
  font-size: 1.25rem;
  margin-bottom: 0.8em;
  white-space: nowrap;
`;

const StyledCardTextNewBuild = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
  font-size: 0.9rem;
  padding-right: 1em;
  margin-bottom: 0;
  width: 130px;
`;
const StyledCardTextExpansion = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
  font-size: 0.9rem;
  padding-right: 1em;
  margin-bottom: 0;
  width: 130px;
`;
const StyledCardTextFenceConstruction = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
  font-size: 0.9rem;
  padding-right: 1em;
  margin-bottom: 0;
  width: 130px;
`;
const StyledCardTextGeneral = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
  padding-right: 1em;
  font-size: 0.9rem;

  margin-bottom: 0;
  width: 135px;
`;

console.log(cardContentMock[0]);

const CardBoxCard: React.FC = () => {
  return (
    <StyledCardBoxCards>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImage>
            <img
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContentMock[0].url}`}
              alt={`${cardContentMock[0].title}`}
            />
          </StyledImage>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleNewBuild>
            {cardContentMock[0].title}
          </StyledCardTitleNewBuild>
          <StyledCardTextNewBuild>
            {cardContentMock[0].content}
          </StyledCardTextNewBuild>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImage>
            <img
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContentMock[1].url}`}
              alt={`${cardContentMock[1].title}`}
            />
          </StyledImage>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleExpansion>
            {cardContentMock[1].title}
          </StyledCardTitleExpansion>
          <StyledCardTextExpansion>
            {cardContentMock[1].content}
          </StyledCardTextExpansion>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImage>
            <img
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContentMock[2].url}`}
              alt={`${cardContentMock[2].title}`}
            />
          </StyledImage>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleFenceConstruction>
            {cardContentMock[2].title}
          </StyledCardTitleFenceConstruction>
          <StyledCardTextFenceConstruction>
            {cardContentMock[2].content}
          </StyledCardTextFenceConstruction>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImage>
            <img
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContentMock[3].url}`}
              alt={`${cardContentMock[3].title}`}
            />
          </StyledImage>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleGeneral>
            {cardContentMock[3].title}
          </StyledCardTitleGeneral>
          <StyledCardTextGeneral>
            {cardContentMock[3].content}
          </StyledCardTextGeneral>
        </StyledCardContent>
      </StyledCardContainer>
    </StyledCardBoxCards>
  );
};

export default CardBoxCard;
