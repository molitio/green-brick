import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";
import HeroSegment from "../common/HeroSegment";

const StyeledDiv = styled.div``;

const Home: React.FC = (props) => {
  return (
    <StyeledDiv>
      <HeroSegment />
    </StyeledDiv>
  );
};

export default Home;
