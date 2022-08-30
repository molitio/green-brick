import React from "react";
import styled, { css } from "styled-components";

const StyledNavSegment = styled.li<NavSegmentProps>`
  flex: ${(props) => props.flex};
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
  height: 100%;
  padding: 1em;
  font-size: 1.5em;
`;

export type NavSegmentProps = React.LiHTMLAttributes<HTMLUListElement> & {
  key: string;
  flex?: number;
  color?: string;
  backgroundColor?: string;
};

const NavSegment: React.FC<NavSegmentProps & React.PropsWithChildren> = (
  props
) => {
  const { key, children } = props;
  return <StyledNavSegment key={key}>{children}</StyledNavSegment>;
};

export default StyledNavSegment;
