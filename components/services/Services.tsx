import React from "react";
import styled from "styled-components";
import CardBox from "../common/CardBox";
import { CardBoxCard } from "../common";

const StyledServices = styled.div`
  background-color: white;
  height: auto;
`;

const Servcies: React.FC = () => {
  return (
    <StyledServices>
      <CardBox />
    </StyledServices>
  );
};

export default Servcies;
