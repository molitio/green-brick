import React from "react";
import styled from "styled-components";
import HeroSegment from "../common/HeroSegment";
import CardBox from "../common/CardBox";

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
