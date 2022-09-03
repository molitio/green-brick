import React from "react";
import styled from "styled-components";
import AppHeader from "./Header";
import { NavBar, NavSegment } from "../navigation";

const StyledLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledLayout>
      <AppHeader />
      <NavBar
        height={"5em"}
        state={"header"}
        externalSegments={[
          <NavSegment
            key={"ext"}
            flex={1}
            color={"white"}
            backgroundColor={"black"}
          >
            segment
          </NavSegment>,
        ]}
      />
      {children}
    </StyledLayout>
  );
};

export default Layout;
