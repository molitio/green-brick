import React from "react";
import { NextPage } from "next";
import {
  Home,
  Services,
  Contact,
  About,
  Footer,
  Introduction,
  staticCardContent,
  CardContent,
} from "../components";
import Page from "../components/common/Page";
import * as smoothscroll from "smoothscroll-polyfill";

type HomePageProps = {
  appName: string;
  content: {
    services: CardContent[];
  };
};

const HomePage: NextPage<HomePageProps> = (props) => {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }

  const { appName } = props;

  return (
    <main>
      <Page id="home">
        <Home />
      </Page>
      <Page id="services">
        <Services content={props?.content?.services} />
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
      <Footer
        maintainer={`© 2022 All Rights Reserved | molitio llc. - ${appName}`}
      />
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: { appName: "green-brick", content: { services: staticCardContent } },
  };
}
