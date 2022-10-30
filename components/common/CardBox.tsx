import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CardBoxCards from "./CardBoxCards";
import { CardContent } from "./types";

const StyledCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardTitle = styled.h1`
  padding: 3.5em 0em 3.5em 0em;
  font-size: 3.5rem;
  margin: 0;

  @media (max-width: 450px) {
    padding: 3.5em 0 3.5em 0;
    font-size: 2.4rem;
  }
`;

type CardBoxProps = {
  content: CardContent[];
};

const CardBox: React.FC<CardBoxProps> = (props) => {
  const { content } = props;

  return (
    <Box>
      <StyledCardBox>
        <StyledCardTitle>{`SZOLGÁLTATÁSAINK`}</StyledCardTitle>
      </StyledCardBox>
      <CardBoxCards content={content} />
    </Box>
  );
};

export default CardBox;
