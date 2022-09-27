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
  font-family: Impact, Haettenschweiler;
  padding: 150px 20px 150px 20px;
  font-size: 56px;
  margin: 0;

  @media (max-width: 450px) {
    padding: 150px 0px 150px 0px;
    font-size: 38px;
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
