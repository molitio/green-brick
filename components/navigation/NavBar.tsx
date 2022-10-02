import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import NavSegment from "./NavSegment";
import { Spacing } from "./types/Spacing";
import { Typeography } from "./types/Typeography";
import { GreenBrickContext } from "../context";
import { StyledTheme, ExpandedOrCollapse } from "../common";
import { log } from "console";

const ImageContainer = styled.div`
  width: 6em;
  height: 100%;
  margin-left: 35px;

  @media screen and (max-width: 834px) {
    margin-left: 0;
    padding-left: 16px;
  }
`;

const StyledNavLink = styled.a`
  color: ${(props) => props.theme?.palette?.text?.primary};
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  margin: 2em 1em 0 0;
  font-size: large;
  font-weight: lighter;

  @media (max-width: 834px) {
    display: none;
  }
`;

const StyledNavLinkExtended = styled.a`
  color: ${(props) => props.theme?.palette?.text?.primary};
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  margin: 1.8em 1em 0 0;
  font-size: x-large;
  font-weight: lighter;

  @media (max-width: 850px) {
    margin: 1em 0 1em 0;
  }
`;

const FixdNav = styled.div`
  background-color: rgba(45, 45, 45, 0.95);
  position: fixed;
  z-index: 1000;
  width: 100%;
  box-shadow: 1px 1px #88888847;
`;

type NavBarContainerProps = {
  extendNavBar: boolean;
};

const NavBarContainer = styled.nav<NavBarContainerProps>`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? "100vh" : "100px")};
  background-color: ${(props) => props.theme.palette.background.menu};
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 834px) {
    border-bottom: 0px white solid;
    background-color: ${(props) => props.theme.palette.background.menu};
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  @media (max-width: 834px) {
    flex: 100%;
    justify-content: center;
  }
`;

const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 834px) {
    flex: 0%;
    justify-content: center;
  }
`;

const NavBarLinkContainer = styled.div`
  display: flex;
  margin-right: 30px;
  @media (max-width: 834px) {
    margin-right: 0px;
  }
`;

const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
`;

const NavBarExtendedContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.menu};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9px;

  @media (min-width: 834px) {
    display: none;
  }
`;

export type NavBarProps = {
  height?: string;
  menuState?: ExpandedOrCollapse;
  navBarState?: ExpandedOrCollapse;
};

const OpenLinksButton = styled.button`
  font-family: system-ui;
  font-weight: 100;
  font-size: 4rem;
  margin-left: 20px;
  margin-top: 10px;
  width: 10px;
  height: 20px;
  background: none;
  border: none;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  position: absolute;

  @media (min-width: 834px) {
    display: none;
  }
`;

const ContactInfoContainer = styled.div`
  font-family: Helvetica, Regular;
  text-align: center;
  color: white;
  margin: 5em;
`;

const LogoLink = styled.a``;

const ContactInfo = styled.p`
  font-family: Helvetica, Arial, sans-serif;
`;

const NavBar: React.FC<NavBarProps> = (props) => {
  const { height, menuState: state } = props;

  const greenBrickContext = React.useContext(GreenBrickContext);

  const [extendNavBar, setExtendNavBar] = useState(false);

  const navTree = greenBrickContext.navTree ?? {};

  const logoSizeRem = "3.6em";
  const defaultSpacing: Spacing & Typeography = {
    padding: "2em 1em 1.5em 1em",
    fontSize: "1.4em",
  };

  return (
    <FixdNav>
      <NavBarContainer extendNavBar={extendNavBar}>
        <OpenLinksButton
          onClick={() => {
            setExtendNavBar((curr) => !curr);
          }}
        >
          {extendNavBar ? <> &#10005;</> : <> &#8801; </>}
        </OpenLinksButton>
        <NavBarInnerContainer>
          <LeftContainer>
            <ImageContainer>
              <LogoLink key={navTree.home.path} href={navTree.home.path}>
                <img
                  style={{ marginTop: "17px" }}
                  src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
                  alt="logo"
                />
              </LogoLink>
            </ImageContainer>
          </LeftContainer>
          <RightContainer>
            <NavBarLinkContainer>
              {navTree
                ? Object.keys(navTree).map((branch) => (
                    <StyledNavLink key={branch} href={navTree[branch].path}>
                      {`${navTree[branch].label}`}
                    </StyledNavLink>
                  ))
                : null}
            </NavBarLinkContainer>
          </RightContainer>
        </NavBarInnerContainer>
        <NavBarExtendedContainer>
          {extendNavBar ?? navTree
            ? Object.keys(navTree).map((branch) => (
                <StyledNavLinkExtended
                  onClick={() => {
                    setExtendNavBar((curr) => !curr);
                  }}
                  key={branch}
                  href={navTree[branch].path}
                >
                  {`${navTree[branch].label}`}
                </StyledNavLinkExtended>
              ))
            : null}
          {extendNavBar ? (
            <ContactInfoContainer>
              <ContactInfo>{`+36205603031`}</ContactInfo>
              <ContactInfo>{`+36202812233`}</ContactInfo>
              <ContactInfo>{`bruderbau2021@gmail.com`}</ContactInfo>
              <ContactInfo>{`2030 Érd, Járom utca 10.`}</ContactInfo>
            </ContactInfoContainer>
          ) : null}
        </NavBarExtendedContainer>
      </NavBarContainer>
    </FixdNav>
  );
};

export default NavBar;
