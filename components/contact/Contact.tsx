import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: yellow;
  height: 90vh;
`;

const Contact: React.FC = () => {
  return (
    <StyledContact>
      <h1>Contact</h1>
    </StyledContact>
  );
};

export default Contact;
