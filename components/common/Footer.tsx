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
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  opacity: 0.5;
  margin-right: 5em;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
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
