import React from "react";
import styled, { css } from "styled-components";
import { Dimensions } from "../navigation";

const StyledPage = styled.div<Dimensions>`
  ${(props) =>
    props.minHeight
      ? css`
          min-height: ${props.minHeight};
        `
      : css`
          min-height: calc(
            max-content - ${(props) => props.theme?.dimensions?.header?.height}
          );
        `}
`;

const Page: React.FC<
  React.PropsWithChildren<React.HTMLProps<HTMLDivElement> & Dimensions>
> = (props) => {
  const { children, minHeight, id } = props;
  return (
    <StyledPage minHeight={minHeight} id={id}>
      {children}
    </StyledPage>
  );
};

export default Page;
