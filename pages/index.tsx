import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Home, Services, Contact, About, Page } from "../components";

const StyledAppScaffolding = styled.div``;

const HomePage: NextPage = () => {
  return (
    <StyledAppScaffolding>
      <Page>
        <Home id="home" />
      </Page>
      <Page>
        <Services id="services" />
      </Page>
      <Page>
        <About id="about" />
      </Page>
      <Page>
        <Contact id="contact" />
      </Page>
    </StyledAppScaffolding>
  );
};

export default HomePage;
