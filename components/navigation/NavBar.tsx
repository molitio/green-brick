import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import NavSegment from "./NavSegment";

const StyledNavBar = styled.nav<NavBarProps>`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: ${(props) => props.height ?? "5em"};
`;

const StyleNavBarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  height: 100%;
`;

export type NavBarProps = {
  height?: string;
  externalSegments?: React.ReactElement[];
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { externalSegments, height } = props;

  const [navMenuCollapsed, setNavMenuCollapsed] =
    React.useState<boolean>(false);

  return (
    <StyledNavBar height={height}>
      <StyleNavBarContainer>
        <NavSegment key="logo">
          {`szia Sanyi `}
          <br />
        </NavSegment>
        <NavSegment key="services">
          {`kepzeld `}
          <br />
        </NavSegment>
        <NavSegment key={"contact"} flex={1}>
          <button>szendwitch menu</button>
        </NavSegment>
        {externalSegments?.map((segment) => segment)}
      </StyleNavBarContainer>
    </StyledNavBar>
  );
};

export default NavBar;
