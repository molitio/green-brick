import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  height: 90vh;
  background-color: orange;
`;

const Contact: React.FC = () => {
  return (
    <StyledContact>
      <h1>Contact</h1>
    </StyledContact>
  );
};

export default Contact;
