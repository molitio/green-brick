import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledHeader = styled.div`
  background-color: blue;
  height: 100vh;
`;

const Header: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHeader>
      <Box sx={{ backgroundColor: "orange", height: "50vh" }}>
        {/* {children} */}
        Example Text
      </Box>
    </StyledHeader>
  );
};

export default Header;
