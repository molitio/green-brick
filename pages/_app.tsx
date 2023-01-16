import { createTheme, Theme } from "@mui/material";
import { StyledLayout, NavBar, AppShell } from "@molitio/ui-core";
import type { AppProps } from "next/app";
import Script from "next/script";
import Header from "next/head";
import { GreenBrickContextRoot } from "../context";
import { MuiThemeProvider, getNonce } from "../components";
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

  const nonce = getNonce();

  console.log("nonce at _app", nonce);

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
          <NavBar height={appTheme?.dimensions?.header?.height} />

          <Component {...pageProps} />
        </StyledLayout>
      </MuiThemeProvider>
    </AppShell>
  );
};

export default GreenBrick;
