import { Theme } from "@mui/material";
import { NavSegmentBranch } from "../../navigation";

export type AppContext = {
  appName: string;
  theme?: Theme;
  navTree?: Record<string, NavSegmentBranch>;
};
