import { createTheme } from "@mui/material";
import React from "react";
import { AppContext } from "./types";

export const GreenBrickContext = React.createContext<AppContext>({
  appName: "",
  theme: createTheme(),
  navTree: {},
});
