import { createTheme } from "@mui/material";
import React from "react";
import { GreenBrickContext } from "./GreenBrickContext";

const GreenBrickContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const defaultTheme = createTheme({});

  return (
    <GreenBrickContext.Provider
      value={{
        appName: "GreenBrick",
        theme: defaultTheme,
        devHighlight: "3px dashed purple",
        navTree: {
          home: { label: "FŐOLDAL", path: "#home" },
          services: { label: "SZOLGÁLTATÁSOK", path: "#services" },
          about: { label: "RÓLUNK", path: "#about" },
          contact: { label: "KAPCSOLAT", path: "#contact" },
        },
      }}
    >
      {children}
    </GreenBrickContext.Provider>
  );
};

export default GreenBrickContextProvider;
