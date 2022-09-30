import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CardBoxCards from "./CardBoxCards";

const StyledCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardTitle = styled.h1`
  font-family: Impacto, Impact, sans-serif;
  padding: 3.5em 0em 3.5em 0em;
  font-size: 3.5rem;
  margin: 0;

  @media (max-width: 450px) {
    padding: 3.5em 0 3.5em 0;
    font-size: 2.4rem;
  }
`;

const CardBox: React.FC = () => {
  return (
    <Box>
      <StyledCardBox>
        <StyledCardTitle>{`SZOLGÁLTATÁSAINK`}</StyledCardTitle>
      </StyledCardBox>
      <CardBoxCards />
    </Box>
  );
};

export default CardBox;
