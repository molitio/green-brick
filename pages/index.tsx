import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Home, Services, Contact, About, Page } from "../components";

const StyledAppScaffolding = styled.div``;

const HomePage: NextPage = () => {
  return (
    <StyledAppScaffolding>
      <Page id="home">
        <Home />
      </Page>
      <Page id="services">
        <Services />
      </Page>
      <Page id="about">
        <About />
      </Page>
      <Page id="contact">
        <Contact />
      </Page>
    </StyledAppScaffolding>
  );
};

export default HomePage;
