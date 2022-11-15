import styled from "styled-components";
import AppHeader from "../components/Header";
import { createTheme, useTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "./style.scss";

const StyledLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContainer: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
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
        inverse: "#fff",
        footer: "#000",
        menu: "rgb(44, 108, 43)",
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
    <GreenBrickContextProvider>
      <ThemeProvider theme={appTheme}>
        <StyledThemeProvider>
          <StyledContainer>
            <AppHeader />
            <NavBar
              height={appTheme.dimensions.page.height}
              menuState={"collapsed"}
            />
            {/* TODO: build layout in _app */}
            <Component {...pageProps} />
          </StyledContainer>
        </StyledThemeProvider>
      </ThemeProvider>
    </GreenBrickContextProvider>
  );
}

export default GreenBrick;
