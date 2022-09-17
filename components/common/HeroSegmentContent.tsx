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
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  margin: 0;
  text-align: center;
  margin-bottom: 30px;
  font-size: 400%;
`;
const StyledDescription = styled.h3`
  display: flex;
  font-family: Helvetica, sans-serif;
  color: white;
  margin: 0;
  text-align: center;
  margin-bottom: 150px;
  font-size: 120%;
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
