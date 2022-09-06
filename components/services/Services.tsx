import { useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CardBox from "../common/CardBox";
import { StyledTheme } from "../common/types";

const StyledServices = styled.div<StyledTheme>`
  background-color: ${(props) => props?.theme?.palette?.background.inverse};
  height: auto;
`;

const Servcies: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledServices theme={theme}>
      <CardBox />
    </StyledServices>
  );
};

export default Servcies;
