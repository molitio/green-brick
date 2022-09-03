import React from "react";
import styled from "styled-components";

const StyledServices = styled.div`
  background-color: orangered;
  height: 90vh;
`;

const Servcies: React.FC = () => {
  return (
    <StyledServices>
      <h1>Services</h1>
    </StyledServices>
  );
};

export default Servcies;
