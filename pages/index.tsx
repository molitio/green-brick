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
        <IntroductionPage />
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
      title: "??J ??P??T??S",
      content:
        "Amennyiben egy teljesen ??j h??z ??p??t??s??t tervezi, keressen benn??nket bizalommal!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/hammer.png",
    },
    {
      title: "B??V??T??S",
      content:
        "??p??letb??v??t??s, hozz????p??t??s gyakori munkafolyamataink egyike. B??zza r??nk otthon??t b??tran!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/paintroller.png",
    },
    {
      title: "KER??T??S ??P??T??S",
      content:
        "Olyan kivitelez??t keres, aki ker??t??s??p??t??ssel is foglalkozik? A beszerz??st??l a be??p??t??sig sz??m??that r??nk!",
      url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/tile.png",
    },
    {
      title: "GENER??L KIVITELEZ??S",
      content:
        "Az ??p??tkez??s minden munkafolyamat??t v??llaljuk a tervez??st??l a kulcsrak??sz ??llapotig megb??zhat?? szakemberekkel!",
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
