import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";

const StyledPage = styled.div`
  min-height: calc(
    max-content - ${(props) => props.theme?.dimensions?.header?.height}
  );
`;

const Page: React.FC<
  React.PropsWithChildren & React.HTMLProps<HTMLDivElement>
> = (props) => {
  const { children, id } = props;
  return <StyledPage id={id}>{children}</StyledPage>;
};

export default Page;
