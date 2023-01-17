import React from "react";
import { NonceContext } from "../context";
import { getNonce } from "./utils";

const NonceContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const nonce = getNonce();
  return (
    <NonceContext.Provider value={nonce}>{children}</NonceContext.Provider>
  );
};

export default NonceContextProvider;
