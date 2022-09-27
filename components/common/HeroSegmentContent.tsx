import React from "react";

import styled from "styled-components";

const StyledCoverImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  /*   @media screen and (max-width: 830px) {
    display: none;
  } */
`;

const StyledCallToAction = styled.div``;

type HeroSegmentContentProps = {
  title?: string;
  description?: string;
  callToAction?: React.ReactElement;
};

const StyledMainTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: Impact;
  color: white;
  text-align: center;
  align-content: center;

  margin-bottom: 0.2em;
  font-size: 80px;

  @media (max-width: 834px) {
    margin-top: 2.8em;
    font-size: 55px;
  }

  @media (max-width: 400px) {
    margin-top: 2.8em;
    font-size: 40px;
  }
`;
const StyledDescription = styled.h3`
  padding: 0 10px 0 10px;
  font-weight: 500;
  display: flex;
  font-family: Helvetica, sans-serif;
  color: white;
  margin: 0;
  text-align: center;
  margin-bottom: 150px;
  font-size: 120%;

  @media (max-width: 400px) {
    margin-top: 2em;
    font-size: 90%;
  }
`;

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction } = props;
  return (
    <StyledCoverImage>
      <StyledMainTitle>{`${title}`}</StyledMainTitle>
      <StyledDescription>{`${description}`}</StyledDescription>
      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverImage>
  );
};
export default HeroSegmentContent;
