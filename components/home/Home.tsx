import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledHeader = styled.div`
  width: 100px;
  height: 100vh;
`;

const Home: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <>home</>;
};
export default Home;
