import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CardBox from "./CardBox";

const StyledHomePage = styled.div``;

const Home: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHomePage>
      <Header />
      <CardBox />
    </StyledHomePage>
  );
};

export default Home;
