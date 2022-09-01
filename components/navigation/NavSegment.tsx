import React from "react";
import styled, { css } from "styled-components";
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
          color: ${props.color};
        `
      : css`
          color: aliceblue;
        `};
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${props.backgroundColor};
        `
      : css`
          background-color: rgba(0, 0, 0, 0);
        `};

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
  Dimensions &
  Spacing &
  Typeography & {
    key: string;
    flex?: number;
    color?: string;
    visible?: boolean;
    centered?: boolean;
    backgroundColor?: string;
  };

const NavSegment: React.FC<NavSegmentProps & React.PropsWithChildren> = (
  props
) => {
  const { key, children, visible, centered } = props;
  return (
    <StyledNavSegment key={key} visible={visible} centered={centered}>
      {children}
    </StyledNavSegment>
  );
};

export default StyledNavSegment;
