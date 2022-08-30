import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledNavBar = styled.div`
  background-color: blue;
  height: 100vh;
`;

const NavBars: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledNavBar>
      <Box sx={{ backgroundColor: "orange", height: "50vh" }}>
        hi layout
        <br />
        {children}
      </Box>
    </StyledNavBar>
  );
};

export default NavBars;
