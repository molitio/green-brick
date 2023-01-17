import React from "react";
import { createTheme, Theme } from "@mui/material";
import { StyledLayout, NavBar, AppShell } from "@molitio/ui-core";
import type { AppProps } from "next/app";
import Script from "next/script";
import { NonceContext } from "../context";
import Header from "next/head";
import { GreenBrickContextRoot } from "../context";
import { MuiThemeProvider } from "../components";
import "./style.scss";

export type StyledTheme = {
  theme?: Theme;
};

const AppHeader: React.FC = () => {
  return (
    <Header>
      <title>Bruderbau Kft.</title>
      <meta property="og:title" content="Bruderbau Kft." key="title" />
    </Header>
  );
};

const GreenBrick = ({ Component, pageProps }: AppProps) => {
  const muiDefault = createTheme();
  const nonceContext = React.useContext(NonceContext);

  const nonce = nonceContext?.nonce;

  const appTheme = createTheme(muiDefault, {
    palette: {
      primary: {
        main: "#2c6c2bf2",
      },
      background: {
        default: "#2d2d2dcc",
        secondary: "#000000fa",
        inverse: "#fff",
      },
      text: {
        primary: "#fff",
      },
    },
    dimensions: {
      page: {
        height: "930px",
      },
      header: {
        height: "5em",
      },
    },
  });

  return (
    <AppShell
      applyGlobalStyleRules={true}
      externalTheme={appTheme}
      externalAppContextRoot={GreenBrickContextRoot}
      fontFamily="'Anton, sans-serif'"
      fontFamilyHref="https://fonts.googleapis.com/css2?family=Anton&display=swap"
    >
      <MuiThemeProvider externalTheme={appTheme}>
        <StyledLayout>
          <AppHeader />
          <Script
            strategy="beforeInteractive"
            nonce={nonce}
            src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
          />
          <NavBar height={appTheme?.dimensions?.header?.height} />

          <Component {...pageProps} />
        </StyledLayout>
      </MuiThemeProvider>
    </AppShell>
  );
};

export default GreenBrick;
