import React from "react";
import { NonceContext } from "../context";
import { getNonce } from "./utils";

const NonceContextProvider: React.FC<React.PropsWithChildren & Nonce> = (
  props
) => {
  const { children } = props;
  const nonce = getNonce();
  return (
    <NonceContext.Provider value={{ nonce: nonce }}>
      {children}
    </NonceContext.Provider>
  );
};

export default NonceContextProvider;
