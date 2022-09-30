import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Home, Services, Contact, About, Page, Footer } from "../components";

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
      <Page minHeight={`1840px`} id="about">
        <About />
      </Page>
      <Page minHeight={`700px`} id="contact">
        <Contact />
      </Page>
      <Footer maintainer="© 2022 All Rights Reserved | molitio llc." />
    </StyledAppScaffolding>
  );
};

export default HomePage;
