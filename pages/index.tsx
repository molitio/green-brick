import React from "react";
import { NextPage } from "next";
import {
  Home,
  Services,
  Contact,
  About,
  Footer,
  Introduction,
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
  const staticCardContent: CardContent[] = [
    {
      title: "ÚJ ÉPÍTÉS",
      content:
        "Amennyiben egy teljesen új ház építését tervezi, keressen bennünket bizalommal!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/hammer.png",
    },
    {
      title: "BŐVÍTÉS",
      content:
        "Épületbővítés, hozzáépítés gyakori munkafolyamataink egyike. Bízza ránk otthonát bátran!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/paintroller.png",
    },
    {
      title: "KERÍTÉS ÉPÍTÉS",
      content:
        "Olyan kivitelezőt keres, aki kerítésépítéssel is foglalkozik? A beszerzéstől a beépítésig számíthat ránk!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/tile.png",
    },
    {
      title: "GENERÁL KIVITELEZÉS",
      content:
        "Az építkezés minden munkafolyamatát vállaljuk a tervezéstől a kulcsrakész állapotig megbízható szakemberekkel!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/drill.png",
    },
  ];

  return {
    props: { appName: "green-brick", content: { services: staticCardContent } },
  };
}
