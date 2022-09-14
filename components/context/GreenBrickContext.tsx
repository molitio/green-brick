import { createTheme } from "@mui/material";
import React from "react";
import { AppContext } from "./types";

export const GreenBrickContext = React.createContext<AppContext>({
  appName: "",
  devHighlight: "none",
  theme: createTheme(),
  navTree: {
    home: { name: "home", path: "#home" },
    services: { name: "services", path: "#services" },
    about: { name: "about", path: "#about" },
    contact: { name: "contact", path: "#contact" },
  },
});
