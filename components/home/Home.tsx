import React from "react";
import styled from "styled-components";

import HeroSegment from "../common/HeroSegment";

const StyledDiv = styled.div``;

const Home: React.FC = (props) => {
  return (
    <StyledDiv>
      <HeroSegment />
    </StyledDiv>
  );
};

export default Home;
