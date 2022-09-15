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
`;

const StyleNavBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  height: 5em;
  margin: 0;

  @media screen and (max-width: 830px) {
    background-color: #000000ac;
    justify-content: center;
    padding: 0 0 30px;
  }
`;

const ImageContainer = styled.div`
  width: 6em;
  height: 100%;
  //position: relative;
  margin-left: 15px;
  margin-top: 28px;

  @media screen and (max-width: 830px) {
    margin: 28px auto 0 auto;
    border: 3px dashed purple;
    // display: block;
  }
`;

const StyledAnchor = styled.div`
  padding: 2em 1.2em 1.5em 0em;
  font-size: 140%;
  font-weight: lighter;
  text-transform: uppercase;

  @media screen and (max-width: 830px) {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 2em 0em 2em 0em;
  }
`;

const StyledNavLinks = styled.a<StyledTheme>`
  color: ${(props) => props.theme?.palette?.text?.primary};
  text-decoration: none;

  @media screen and (max-width: 830px) {
    position: relative;
  }
`;

type StyledListItemsContinerProps = {
  expanded?: boolean;
};

const StyledListItemsContiner = styled.div<StyledListItemsContinerProps>`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;

  @media screen and (max-width: 830px) {
    display: ${(props) => (props.expanded ? "inline" : "none")};
    position: absolute;
    top: 184px;
    margin-right: 0px;
    background-color: #000000ac;
    width: 100%;
  }
`;

const StyledMenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 830px) {
    // position: absolute;
    border: 3px dashed purple;
    display: block;
    opacity: 0.5px;
  }
`;

export type NavBarProps = {
  height?: string;
  menuState?: ExpandedOrCollapse;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { height, menuState: state } = props;

  const greenBrickContext = React.useContext(GreenBrickContext);

  const [navBarMenuState, setNavBarMenuState] =
    React.useState<ExpandedOrCollapse>(state ?? "collapsed");

  const [navBarState, setNavBarState] = React.useState<ExpandedOrCollapse>();

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
    <StyledNavBar height={height}>
      <StyleNavBarContainer>
        <NavSegment visible key={"menu"} onClick={handleMenuClick}>
          <StyledMenuIconContainer>
            <MenuIcon sx={{ fontSize: "50px", margin: "30px" }} />
          </StyledMenuIconContainer>
        </NavSegment>
        <NavSegment
          keyParam="logo"
          flex={1}
          visible
          minWidth={logoSizeRem}
          minHeight={logoSizeRem}
          centered={navBarMenuState === "collapsed"}
        >
          <ImageContainer>
            <img
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo_white.svg"
              alt="logo"
            />
          </ImageContainer>
        </NavSegment>

        {/*     <StyledListItemsContiner expanded={navBarMenuState === "expanded"}> */}
        {navTree
          ? Object.keys(navTree).map((branch) => (
              <NavSegment key={branch} visible={navBarMenuState === "expanded"}>
                <StyledAnchor>
                  <StyledNavLinks href={navTree[branch].path} theme={theme}>
                    {`${navTree[branch].label}`}
                  </StyledNavLinks>
                </StyledAnchor>
              </NavSegment>
            ))
          : null}

        {/*      </StyledListItemsContiner> */}
      </StyleNavBarContainer>
    </StyledNavBar>
  );
};

export default NavBar;
