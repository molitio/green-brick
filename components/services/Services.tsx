import React from "react";
import styled from "styled-components";
import CardBox from "../common/CardBox";
import { StyledTheme } from "../common/types";

const StyledServices = styled.div`
  background-color: ${(props) => props?.theme?.palette?.background.inverse};
`;

const Servcies: React.FC = (props) => {
  return (
    <StyledServices>
      <CardBox />
    </StyledServices>
  );
};

export default Servcies;
