import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import NavSegment from "./NavSegment";
import { NavBarMenuState } from "./types/NavBarMenuState";
import { Spacing } from "./types/Spacing";
import { Typeography } from "./types/Typeography";
import { GreenBrickContext } from "../context";

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

const ImageContainer = styled.div`
  width: 5em;
  height: 100%;
  position: relative;
`;

export type NavBarProps = {
  height?: string;
  state?: NavBarMenuState;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { height, state } = props;

  const greenBrickContext = React.useContext(GreenBrickContext);

  const [navBarMenuState, setNavBarMenuState] = React.useState<NavBarMenuState>(
    state ?? "header"
  );

  const handleMenuClick = () => {
    console.log(`handleMenuClick: ${navBarMenuState}`);

    switch (navBarMenuState) {
      case "header":
        setNavBarMenuState("collapsed");
        break;

      case "collapsed":
        setNavBarMenuState("header");
      default:
        break;
    }
  };

  const logoSizeRem = "3.6em";
  const defaultSpacing: Spacing & Typeography = {
    padding: "2em 1em 1.5em 1em",
    fontSize: "1.4em",
  };

  console.log("greenBrickContext", greenBrickContext.navTree);

  return (
    <StyledNavBar height={height}>
      <StyleNavBarContainer>
        {greenBrickContext?.navTree
          ? Object.keys(greenBrickContext.navTree).map((branch) => (
              <NavSegment
                onClick={handleMenuClick}
                key={branch}
                visible={false}
              >
                <MenuIcon sx={{ fontSize: 40 }} />
              </NavSegment>
            ))
          : null}

        <NavSegment onClick={handleMenuClick} key={"menu"} visible={false}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </NavSegment>
        <NavSegment
          key="logo"
          flex={1}
          visible
          minWidth={logoSizeRem}
          minHeight={logoSizeRem}
          padding="1em 1em 1.5em 1.5em"
          centered={navBarMenuState === "collapsed"}
        >
          <ImageContainer>
            <img
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
              alt="logo"
            />
          </ImageContainer>
        </NavSegment>
        <NavSegment
          key="home"
          visible={navBarMenuState === "header"}
          {...defaultSpacing}
        >
          {` FŐOLDAL `}
        </NavSegment>
        <NavSegment
          key="services"
          visible={navBarMenuState === "header"}
          {...defaultSpacing}
        >
          {` SZOLGÁLTATÁSOK `}
        </NavSegment>
        <NavSegment
          key="about"
          visible={navBarMenuState === "header"}
          {...defaultSpacing}
        >
          {` RÓLUNK `}
        </NavSegment>
        <NavSegment
          key="contact"
          visible={navBarMenuState === "header"}
          {...defaultSpacing}
        >
          {` KAPCSOLAT `}
        </NavSegment>
      </StyleNavBarContainer>
    </StyledNavBar>
  );
};

export default NavBar;
