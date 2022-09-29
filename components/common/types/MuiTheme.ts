declare module "@mui/material" {
  export interface TypeBackground {
    background: {
      inverse?: string;
      menu?: string;
      footer?: string;
    };
  }
  export interface Theme {
    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
    };
  }
}

export {};
