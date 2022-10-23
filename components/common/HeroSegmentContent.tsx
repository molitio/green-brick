import React from "react";

import styled from "styled-components";

const StyledCoverImage = styled.div`
  position: relative;
`;

const StyledCallToAction = styled.div`
  text-align: center;
`;

type HeroSegmentContentProps = {
  title?: string;
  description?: string;
  callToAction?: React.ReactNode;
};

const StyledMainTitle = styled.h1`
  color: white;
  text-align: center;
  margin-top: 0.7em;
  margin-bottom: 0.2em;
  font-size: 5rem;
  padding: 0 1em 0 1em;

  @media (max-width: 834px) {
    font-size: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const StyledDescription = styled.h3`
  font-weight: 400;
  font-family: Helvetica, sans-serif;
  color: white;
  margin: 0;
  text-align: center;
  margin-bottom: 6em;
  font-size: 1.25rem;
  padding: 0 2em 0 2em;

  @media (max-width: 400px) {
    margin-top: 2em;
    font-size: 0.9rem;
  }
`;

const StyledHorizontalLine = styled.hr`
  color: white;
  width: 200px;
  margin-top: 8em;

  @media (max-width: 400px) {
    width: 100px;
  }
`;

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction } = props;

  return (
    <StyledCoverImage>
      <StyledHorizontalLine />
      <StyledMainTitle>{`${title}`}</StyledMainTitle>
      <StyledDescription>{`${description}`}</StyledDescription>
      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverImage>
  );
};
export default HeroSegmentContent;
