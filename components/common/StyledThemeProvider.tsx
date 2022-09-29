import React from "react";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

const StyledThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const theme = useTheme();

  console.log(theme.palette.primary.main);

  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

export default StyledThemeProvider;
