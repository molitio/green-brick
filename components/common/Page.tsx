import { useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";

const StyledPage = styled.div<StyledTheme>`
  min-height: calc(100vh - ${(props) => props.theme.spacing.header.height});
`;

const Page: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const theme = useTheme();
  return <StyledPage theme={theme}>{children}</StyledPage>;
};

export default Page;
