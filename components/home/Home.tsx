import React from "react";
import styled from "styled-components";
import HeroSegment from "../common/HeroSegment";

const StyledHomePage = styled.div``;

const Home: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHomePage>
      <HeroSegment />
    </StyledHomePage>
  );
};

export default Home;
