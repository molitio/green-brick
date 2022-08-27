import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import AppHeader from "./Header";

const StyledLayout = styled.div`
  background-color: green;
  height: 100vh;
`;

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledLayout>
      <AppHeader />
      <Box sx={{ backgroundColor: "yellow", height: "50vh" }}>
        hi layout
        <br />
        {children}
      </Box>
    </StyledLayout>
  );
};

export default Layout;
