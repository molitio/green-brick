import React from "react";
import styled from "styled-components";
import AppHeader from "./Header";
import { NavBar, NavSegment } from "../navigation";
import { GreenBrickContext, GreenBrickContextProvider } from "../context";
import { createTheme, ThemeProvider } from "@mui/material";

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

  console.log("context", context);

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "rgba(36, 171, 14, 0.5)",
      },
      background: {
        default: "rgba(45, 45, 45, 0.8)",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <GreenBrickContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <StyledLayout>
          <AppHeader />
          <NavBar
            height={"5em"}
            state={"header"}
            externalSegments={[
              <NavSegment key={"ext"} flex={1}>
                segment
              </NavSegment>,
            ]}
          />
          {children}
        </StyledLayout>
      </ThemeProvider>
    </GreenBrickContextProvider>
  );
};

export default Layout;
