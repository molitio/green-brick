import React from "react";
import styled from "styled-components";
import HeroSegment from "./HeroSegment";
import CardBox from "./CardBox";

const StyledHomePage = styled.div``;

const Home: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHomePage>
      <HeroSegment />
      <CardBox />
    </StyledHomePage>
  );
};

export default Home;
