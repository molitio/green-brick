import { Theme } from "@mui/material";

export type AppContext = {
  appName: string;
  theme?: Theme;
  devHighlight?:
    | "3px dashed purple"
    | "3px dashed green"
    | "3px dashed blue"
    | "3px dashed red"
    | "3px dashed yellow"
    | "3px dashed orange"
    | "3px dashed pink"
    | "3px dashed gray"
    | "none";
};
