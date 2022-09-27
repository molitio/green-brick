import { useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CardBox from "../common/CardBox";
import { StyledTheme } from "../common/types";

const StyledServices = styled.div<StyledTheme>`
  background-color: ${(props) => props?.theme?.palette?.background.inverse};
`;

const Servcies: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { id } = props;
  const theme = useTheme();

  return (
    <StyledServices theme={theme} id={id}>
      <CardBox />
    </StyledServices>
  );
};

export default Servcies;
