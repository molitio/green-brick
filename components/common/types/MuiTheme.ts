/* import { Spacing } from '@mui/material'; */

declare module "@mui/material" {
    export interface TypeBackground {
        background: {

            inverse?: string;
            menu?: string;
        }
    }
    export type Spacing {
      page?: {
        height?: string;
      };
      header?: {
        height?: string;
      };
    }
  }
    
  export {};


