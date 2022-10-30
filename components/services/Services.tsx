import React from "react";
import styled from "styled-components";
import { CardContent } from "../common";
import CardBox from "../common/CardBox";

const StyledServices = styled.div`
  background-color: ${(props) => props?.theme?.palette?.background.inverse};
`;

type ServicesProps = {
  content: CardContent[];
};

const Servcies: React.FC<ServicesProps> = (props) => {
  const { content } = props;

  return (
    <StyledServices>
      <CardBox content={content} />
    </StyledServices>
  );
};

export default Servcies;
