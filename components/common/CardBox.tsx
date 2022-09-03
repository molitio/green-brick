import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBox: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledCardBox>
      <Box>
        <h1
          style={{
            fontFamily: "Impact, Haettenschweiler",
          }}
        >
          {`SZOLGÁLTATÁSAINK`}
        </h1>
      </Box>
    </StyledCardBox>
  );
};

export default CardBox;
