import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";
import HeroSegment from "../common/HeroSegment";

const StyledHomePage = styled.div<StyledTheme>``;

const Home: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { id } = props;
  return (
    <StyledHomePage id={id}>
      <HeroSegment />
    </StyledHomePage>
  );
};

export default Home;
