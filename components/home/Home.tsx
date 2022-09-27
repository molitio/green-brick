import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";
import HeroSegment from "../common/HeroSegment";

const Home: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { id } = props;
  return <HeroSegment />;
};

export default Home;
