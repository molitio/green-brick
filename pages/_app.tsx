import { createTheme, useTheme, ThemeProvider, Theme } from "@mui/material";
import { SystemContextProvider, StyledLayout, NavBar } from "@molitio/ui-core";
import type { AppProps } from "next/app";
import Header from "next/head";
import "./style.scss";

export type StyledTheme = {
  theme?: Theme;
};
declare module "@mui/material" {
  export interface TypeBackground {
    background: {
      inverse?: string;
      menu?: string;
      footer?: string;
    };
  }
  export interface Theme {
    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
    };
  }
}

const AppHeader: React.FC = () => {
  return (
    <Header>
      <></>
    </Header>
  );
};

const MuiThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

function GreenBrick({ Component, pageProps }: AppProps) {
  const muiDefault = createTheme();

  const appTheme = createTheme(muiDefault, {
    palette: {
      primary: {
        main: "rgba(36, 171, 14, 0.5)",
      },
      background: {
        default: "rgba(45, 45, 45, 0.8)",
        secondary: "rgb(44, 108, 43)",
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
    <SystemContextProvider
      externalTheme={appTheme}
      appName={"GreenBrick"}
      navTree={{
        home: { label: "FŐOLDAL", path: "#home" },
        services: { label: "SZOLGÁLTATÁSOK", path: "#services" },
        about: { label: "RÓLUNK", path: "#about" },
        contact: { label: "KAPCSOLAT", path: "#contact" },
      }}
    >
      <ThemeProvider theme={appTheme}>
        <MuiThemeProvider>
          <StyledLayout>
            <AppHeader />
            <NavBar
              height={appTheme?.dimensions?.page?.height}
              menuState={"collapsed"}
            />
            <Component {...pageProps} />
          </StyledLayout>
        </MuiThemeProvider>
      </ThemeProvider>
    </SystemContextProvider>
  );
}

export default GreenBrick;
