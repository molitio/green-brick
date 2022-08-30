import React from "react";
import styled from "styled-components";
import AppHeader from "./Header";
import { Home } from "../home";

const StyledLayout = styled.div``;

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledLayout>
      {/* <AppHeader /> */}
      {children}
    </StyledLayout>
  );
};

export default Layout;
