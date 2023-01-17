import React from "react";
import { Nonce } from "../types";
import {getNonce } from "../components"

export const NonceContext = React.createContext<Nonce>({
  nonce: "",
})

