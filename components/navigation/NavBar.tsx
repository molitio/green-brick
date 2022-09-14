import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import NavSegment from "./NavSegment";
import { NavBarMenuState } from "./types/NavBarMenuState";
import { Spacing } from "./types/Spacing";
import { Typeography } from "./types/Typeography";
import { GreenBrickContext } from "../context";
import { StyledTheme } from "../common";
import { useTheme } from "@mui/material";

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

const StyledAnchor = styled.a<StyledTheme>`
  color: ${(props) => props.theme?.palette?.text?.primary};
  padding: 1em;
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

  const navTree = greenBrickContext.navTree ?? {};

  const theme = useTheme();

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

  return (
    <StyledNavBar height={height}>
      <StyleNavBarContainer>
        <NavSegment onClick={handleMenuClick} keyParam={"menu"} visible={false}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </NavSegment>
        <NavSegment
          keyParam="logo"
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

        {navTree
          ? Object.keys(navTree).map((branch) => (
              <NavSegment key={branch} visible={navBarMenuState === "header"}>
                <StyledAnchor href={navTree[branch].path} theme={theme}>
                  {`${navTree[branch].label}`}
                </StyledAnchor>
              </NavSegment>
            ))
          : null}
      </StyleNavBarContainer>
    </StyledNavBar>
  );
};

export default NavBar;
