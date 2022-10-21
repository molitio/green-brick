import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import {
  Home,
  Services,
  Contact,
  About,
  Page,
  Footer,
  Introduction,
} from "../components";
import * as smoothscroll from "smoothscroll-polyfill";
const StyledAppScaffolding = styled.div``;

const HomePage: NextPage = () => {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }

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
      <Page id="introduction">
        <Introduction />
      </Page>
      <Page minHeight={`700px`} id="contact">
        <Contact />
      </Page>
      <Footer maintainer="© 2022 All Rights Reserved | molitio llc." />
    </StyledAppScaffolding>
  );
};

export default HomePage;
