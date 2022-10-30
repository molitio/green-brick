import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  margin: auto;
`;

type ContactTableRowProps = {
  rows: React.ReactNode[];
};

const ContactTable: React.FC<ContactTableRowProps> = (props) => {
  const { rows } = props;

  return (
    <StyledTable>
      <tbody>{rows?.map((row) => row)}</tbody>
    </StyledTable>
  );
};

export default ContactTable;
