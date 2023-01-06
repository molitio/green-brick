import React from "react";
import { NextPage } from "next";
import {
  CardContent,
  Page,
  Footer,
  AboutPage,
  ContactPage,
  IntroductionPage,
  ServicesPage,
  SystemContext,
  HomePage,
} from "@molitio/ui-core";
import * as smoothscroll from "smoothscroll-polyfill";
import { ContactForm } from "../components";
import styled from "styled-components";


type HomeProps = {
  googleApiKey: string;
};

const Home: NextPage<HomeProps> = (props) => {
  const { googleApiKey } = props;
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }

  const systemContext = React.useContext(SystemContext);
  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const assetUrls = contactLeafs?.contactInfo?.assetUrls;

  return (
    <main>
      <Page id="home">
        <HomePage />
      </Page>
      <Page id="services">
        <ServicesPage />
      </Page>
      <Page id="about">
        <AboutPage />
      </Page>
      <Page id="introduction">
     {/*    <StyledIntroductionPage /> */}
      </Page>
      <Page minHeight={`700px`} id="contact">
        <ContactPage
          title={textContent?.title ?? ""}
          logoUrl={assetUrls?.logo ?? ""}
          backgroundImageUrl={assetUrls?.backgroundImage ?? ""}
          contactForm={<ContactForm />}
          contactInfoCollection={{
            phoneMain: {
              type: "tel",
              iconUrl: assetUrls?.phoneMainIcon ?? "",
              displayedText: textContent?.phoneMain ?? "",
              href: assetUrls?.phoneMainHref ?? "",
            },
            phoneSecondary: {
              type: "tel",
              iconUrl: assetUrls?.phoneSecondaryIcon ?? "",
              displayedText: textContent?.phoneSecondary ?? "",
              href: assetUrls?.phoneSecondaryHref ?? "",
            },
            email: {
              type: "email",
              iconUrl: assetUrls?.emailIcon ?? "",
              displayedText: textContent?.email ?? "",
              href: assetUrls?.emailHref ?? "",
            },
            address: {
              type: "address",
              iconUrl: assetUrls?.addressIcon ?? "",
              displayedText: textContent?.address ?? "",
              href: assetUrls?.addressHref ?? "",
            },
          }}
        />
      </Page>
      <Footer />
    </main>
  );
};

export default Home;

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

  const apiKey = process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? "";
  return {
    props: {
      appName: "green-brick",
      content: { services: staticCardContent },
      googleApiKey: apiKey,
    },
  };
}
