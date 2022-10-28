import React from "react";
import styled, { css } from "styled-components";
import { nanoid } from "nanoid";
import { StyledTheme } from "../common/types";
import { Dimensions } from "./types/Dimensions";
import { Spacing } from "./types/Spacing";
import { Typeography } from "./types/Typeography";

const StyledNavSegment = styled.li<NavSegmentProps>`
  display: ${(props) => (props.visible ? "inherit" : "none")};
  flex: ${(props) => props.flex};
  font-family: Roboto, sans-serif;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width ?? "inherit"};
  height: ${(props) => props.height ?? "inherit"};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
  ${(props) =>
    props.color
      ? css`
          color: ${props?.color};
        `
      : css`
          color: ${props.theme.palette?.text?.primary};
        `};

  @media screen and (max-width: 830px) {
    ${(props) =>
      props.backgroundColor
        ? css`
            background-color: ${props.backgroundColor};
          `
        : css`
            background-color: ${props.theme.palette?.background?.default};
          `};
  }

  ${(props) =>
    props.centered
      ? css`
          align-self: center;
          justify-content: center;
        `
      : css`
          align-self: start;
          justify-content: flex-start;
        `}
`;

export type NavSegmentProps = React.LiHTMLAttributes<HTMLUListElement> &
  StyledTheme &
  Dimensions &
  Spacing &
  Typeography & {
    keyParam?: string;
    flex?: number;
    color?: string;
    visible?: boolean;
    centered?: boolean;
    backgroundColor?: string;
  };

const NavSegment: React.FC<NavSegmentProps & React.PropsWithChildren<any>> = (
  props
) => {
  const { keyParam, children, visible, centered, padding } = props;
  return (
    <StyledNavSegment
      keyParam={keyParam ?? nanoid()}
      visible={visible ?? true}
      centered={centered}
      padding={padding}
    >
      {children}
    </StyledNavSegment>
  );
};

export default NavSegment;
