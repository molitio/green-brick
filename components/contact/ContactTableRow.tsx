import React from "react";
import styled from "styled-components";
import { Spacing } from "../navigation";

type ContactTableRowProps = {
  icon: React.ReactNode;
  text: React.ReactNode;
  iconSpacing?: Spacing;
};

type StyledContactIconProps = {
  margin?: string;
};

const StyledContactIcon = styled.td<StyledContactIconProps>`
  width: 3em;
  height: 3em;
  & > img {
    margin: ${(props) => props.margin};
  }
`;

const ContactTableRow: React.FC<ContactTableRowProps> = (props) => {
  const { icon, text, iconSpacing } = props;
  return (
    <tr>
      <StyledContactIcon margin={iconSpacing?.margin}>{icon}</StyledContactIcon>
      <td>{text}</td>
    </tr>
  );
};

export default ContactTableRow;
