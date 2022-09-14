import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Home, Services, Contact, About } from "../components/";

const StyledAppSchaffolding = styled.div``;

const HomePage: NextPage = () => {
  return (
    <StyledAppSchaffolding>
      <Home id="home" />
      <Services id="services" />
      <About id="about" />
      <Contact id="contact" />
    </StyledAppSchaffolding>
  );
};

export default HomePage;
