import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import NavSegment from "./NavSegment";
import { Spacing } from "./types/Spacing";
import { Typeography } from "./types/Typeography";
import { GreenBrickContext } from "../context";
import { StyledTheme, ExpandedOrCollapse } from "../common";
import { useTheme } from "@mui/material";

const StyledNavBar = styled.nav<NavBarProps>`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: ${(props) => props.height ?? "5em"};
  width: 100vw;
  display: flex;
  flex-direction: ${(props) =>
    props.menuState === "expanded" ? "row" : "column"};

  @media screen and (max-width: 830px) {
    background-color: ${(props) =>
      props.menuState === "expanded"
        ? props.theme.palette.background.menu
        : "transparent"};
  }
`;

const StyledNavSegmentCollection = styled.ul<NavBarProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0 2em 0 0;
  bottom: 100px;

  @media screen and (max-width: 830px) {
    position: absolute;
    margin: 10em 0 0 0;
    text-align: center;
    display: block;
    padding: 0 0 30px;
    width: 100%;

    /* background-color: ${(props) =>
      props.menuState === "expanded"
        ? props.theme.palette.background.menu
        : "transparent"};*/
  }
`;

const ImageContainer = styled.div`
  width: 6em;
  height: 100%;
  margin-left: 15px;
  margin-top: 28px;

  @media screen and (max-width: 830px) {
    margin: 28px auto 0 auto;
    border: 3px dashed purple;
  }
`;

const StyledNavLink = styled.a<StyledTheme>`
  color: ${(props) => props.theme?.palette?.text?.primary};
  margin-top: 2em;
  text-decoration: none;
  padding-left: 1em;
  font-size: 1.5em;
  font-weight: lighter;

  @media screen and (max-width: 830px) {
    position: relative;
  }
`;

const StyledMenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 830px) {
    position: absolute;
    color: white;
    display: block;
    opacity: 0.5px;
  }
`;

export type NavBarProps = {
  height?: string;
  menuState?: ExpandedOrCollapse;
  navBarState?: ExpandedOrCollapse;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { height, menuState: state } = props;

  const greenBrickContext = React.useContext(GreenBrickContext);

  const [navBarMenuState, setNavBarMenuState] =
    React.useState<ExpandedOrCollapse>(state ?? "collapsed");

  const [navBarState, setNavBarState] = React.useState<ExpandedOrCollapse>(
    state ?? "collapsed"
  );

  const navTree = greenBrickContext.navTree ?? {};

  const theme = useTheme();

  const handleMenuClick = () => {
    console.log(`handleMenuClick: ${navBarMenuState}`);

    switch (navBarMenuState) {
      case "expanded":
        setNavBarMenuState("collapsed");

        break;

      case "collapsed":
        setNavBarMenuState("expanded");

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
    <StyledNavBar menuState={navBarMenuState} theme={theme} height={height}>
      <div>
        <StyledMenuIconContainer onClick={handleMenuClick}>
          <MenuIcon sx={{ fontSize: "50px", margin: "30px" }} />
        </StyledMenuIconContainer>
        <ImageContainer>
          <img
            src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo_white.svg"
            alt="logo"
          />
        </ImageContainer>
      </div>
      <StyledNavSegmentCollection>
        {navTree
          ? Object.keys(navTree).map((branch) => (
              <NavSegment key={branch}>
                <StyledNavLink href={navTree[branch].path} theme={theme}>
                  {`${navTree[branch].label}`}
                </StyledNavLink>
              </NavSegment>
            ))
          : null}
      </StyledNavSegmentCollection>
    </StyledNavBar>
  );
};

export default NavBar;
