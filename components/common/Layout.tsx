import React from "react";
import styled from "styled-components";
import { createTheme, TypeBackground, ThemeProvider } from "@mui/material";
import AppHeader from "./Header";
import { NavBar, NavSegment } from "../navigation";
import { GreenBrickContext, GreenBrickContextProvider } from "../context";
import StyledThemeProvider from "./StyledThemeProvider";

const StyledLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const context = React.useContext(GreenBrickContext);

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
        //menu: "rgba(45, 45, 45, 0.95)",
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
          <StyledLayout>
            <AppHeader />
            <NavBar
              height={appTheme.dimensions.page.height}
              menuState={"collapsed"}
            />
            {children}
          </StyledLayout>
        </StyledThemeProvider>
      </ThemeProvider>
    </GreenBrickContextProvider>
  );
};

export default Layout;
