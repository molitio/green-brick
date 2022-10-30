import React from "react";
import styled from "styled-components";
import { CardContent } from "./types";

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

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5em;
  height: 9.5em;
  background-color: ${(props) =>
    props && props.theme ? props.theme.palette.primary.main : "none"};

  @media (max-width: 800px) {
    width: 8.5em;
    height: 8.5em;
  }
`;

const StyledImage = styled.img`
  opacity: 0.4;
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
    margin-bottom: 1.5em;
  }
`;
////////////////////////////////
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

  @media (max-width: 800px) {
    width: 8.5em;
    height: 8.5em;
  }
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 11em;

  @media (max-width: 800px) {
    width: 8em;
    height: 8em;
  }
`;

const StyledCardTitleNewBuild = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 0.8em;

  @media (max-width: 800px) {
    margin-top: -0.5em;
    font-size: 1.15rem;
    margin-bottom: 0.6em;
  }
`;
const StyledCardTitleExpansion = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 0.8em;

  @media (max-width: 800px) {
    margin-top: -0.5em;
    font-size: 1.15rem;
    margin-bottom: 0.6em;
  }
`;

const StyledCardTitleFenceConstruction = styled.h2`
  margin-top: 0;
  margin-bottom: 0em;
  font-size: 1.3rem;
  margin-bottom: 0.8em;

  @media (max-width: 800px) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.15rem;
  }
`;

const StyledCardTitleGeneral = styled.h2`
  margin-top: -0.15em;
  font-size: 1.25rem;
  margin-bottom: 0.8em;
  white-space: nowrap;

  @media (max-width: 800px) {
    margin-top: -0.5em;
    margin-bottom: 0.6em;
    font-size: 1.1rem;
  }
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
  margin-bottom: 2.2em;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
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
  margin-bottom: 2.2em;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
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
  margin-bottom: 0.2em;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
const StyledCardTextGeneral = styled.p`
  font-family: Helvetica, arial, sans-serif;
  font-weight: normal;
  margin-top: 0;
  text-align: initial;
  padding-right: 1em;
  font-size: 0.9rem;
  margin-bottom: 0.2em;
  width: 135px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

type CardBoxCardProps = {
  content?: CardContent[];
};

const CardBoxCard: React.FC<CardBoxCardProps> = (props) => {
  const { content = [] } = props;
  return (
    <StyledCardBoxCards>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImageContainer>
            <StyledImage
              width={92.15}
              height={76.02}
              src={`${content[0]?.url}`}
              alt={`${content[0]?.title}`}
            />
          </StyledImageContainer>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleNewBuild>{content[0]?.title}</StyledCardTitleNewBuild>
          <StyledCardTextNewBuild>{content[0]?.content}</StyledCardTextNewBuild>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImageContainer>
            <StyledImage
              width={92.15}
              height={76.02}
              src={`${content[1]?.url}`}
              alt={`${content[1]?.title}`}
            />
          </StyledImageContainer>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleExpansion>
            {content[1]?.title}
          </StyledCardTitleExpansion>
          <StyledCardTextExpansion>
            {content[1]?.content}
          </StyledCardTextExpansion>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImageContainer>
            <StyledImage
              width={92.15}
              height={76.02}
              src={`${content[2]?.url}`}
              alt={`${content[2]?.title}`}
            />
          </StyledImageContainer>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleFenceConstruction>
            {content[2]?.title}
          </StyledCardTitleFenceConstruction>
          <StyledCardTextFenceConstruction>
            {content[2]?.content}
          </StyledCardTextFenceConstruction>
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImageContainer>
          <StyledImageContainer>
            <StyledImage
              width={92.15}
              height={76.02}
              src={`${content[3]?.url}`}
              alt={`${content[3]?.title}`}
            />
          </StyledImageContainer>
        </StyledCardImageContainer>
        <StyledCardContent>
          <StyledCardTitleGeneral>{content[3]?.title}</StyledCardTitleGeneral>
          <StyledCardTextGeneral>{content[3]?.content}</StyledCardTextGeneral>
        </StyledCardContent>
      </StyledCardContainer>
    </StyledCardBoxCards>
  );
};

export default CardBoxCard;
