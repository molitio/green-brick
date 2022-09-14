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
  padding: 130px 0px 130px 0px;
  font-size: 350%;
  margin: 0;
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
