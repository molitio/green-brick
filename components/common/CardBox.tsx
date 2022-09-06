import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CardBoxCard from "./CardBoxCard";

const StyledCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBox: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Box>
      <StyledCardBox>
        <h1
          style={{
            fontFamily: "Impact, Haettenschweiler",
            padding: "170px",
            fontSize: "300%",
          }}
        >
          {`SZOLGÁLTATÁSAINK`}
        </h1>
      </StyledCardBox>
      <CardBoxCard />
    </Box>
  );
};

export default CardBox;
