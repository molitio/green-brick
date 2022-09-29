import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: max-content;
  border: 1px solid ${(props) => props?.theme?.palette?.background?.footer};
  color: ${(props) => props.theme?.palette?.text?.primary};
  text-align: right;
  opacity: 0.9;
  background-color: ${(props) => props?.theme?.palette?.background?.footer};
`;
const StyledFooterText = styled.p`
  opacity: 0.5;
  margin-right: 5em;
`;

type FooterProps = {
  maintainer: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { maintainer } = props;
  return (
    <StyledFooter>
      <StyledFooterText>{maintainer}</StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
