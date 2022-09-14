import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Home, Services, Contact, About } from "../components/";

const StyledAppSchaffolding = styled.div`
  /* display: block; */
`;

const HomePage: NextPage = () => {
  return (
    <StyledAppSchaffolding>
      <Home />
      <Services />
      <About />
      <Contact />
    </StyledAppSchaffolding>
  );
};

export default HomePage;
