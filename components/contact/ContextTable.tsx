import React from "react";

type ContactTableRowProps = {
  rows: React.ReactNode[];
};

const ContactTable: React.FC<ContactTableRowProps> = (props) => {
  const { rows } = props;

  return (
    <table style={{ margin: "auto" }}>
      <tbody>{rows?.map((row) => row)}</tbody>
    </table>
  );
};

export default ContactTable;
