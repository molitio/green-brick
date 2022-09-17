import React from "react";
import styled from "styled-components";
import AppHeader from "./Header";
import { NavBar, NavSegment } from "../navigation";
import { GreenBrickContext, GreenBrickContextProvider } from "../context";
import {
  createTheme,
  Theme,
  ThemeProvider,
  TypeBackground,
} from "@mui/material";

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

  console.log("context: ", context.appName);

  const muiDefault = createTheme();

  const appTheme = createTheme(muiDefault, {
    palette: {
      primary: {
        main: "rgba(36, 171, 14, 0.5)",
      },
      background: {
        default: "rgba(45, 45, 45, 0.8)",
        inverse: "#fff",
        menu: "rgba(45, 45, 45, 0.95)",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <GreenBrickContextProvider>
      <ThemeProvider theme={appTheme}>
        <StyledLayout>
          <AppHeader />

          <NavBar height={"5em"} menuState={"collapsed"} />
          {children}
        </StyledLayout>
      </ThemeProvider>
    </GreenBrickContextProvider>
  );
};

export default Layout;
