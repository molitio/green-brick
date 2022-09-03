import React from "react";

import styled from "styled-components";

const StyledCoverImage = styled.div`
  position: relative;
  /* top: 29vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: "1";
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledCallToAction = styled.div`
  /* border: 3px dashed purple; */
`;

type HeroSegmentContentProps = {
  title?: string;
  description?: string;
  callToAction?: React.ReactElement;
};

const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
  const { title, description, callToAction } = props;
  return (
    <StyledCoverImage>
      <h1
        style={{
          display: "flex",
          fontFamily: "Impact, Haettenschweiler",
          fontSize: "370%",
          color: "white",
          margin: "0",
          textAlign: "center",
        }}
      >
        {`${title}`}
      </h1>
      <h3
        style={{
          display: "flex",
          fontFamily: " 'Roboto', sans-serif",
          color: "white",
          margin: "0",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        {`${description}`}
      </h3>

      <StyledCallToAction>{callToAction}</StyledCallToAction>
    </StyledCoverImage>
  );
};
export default HeroSegmentContent;
