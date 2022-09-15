import React from "react";
import styled from "styled-components";
import HeroSegmentContent from "../common/HeroSegmentContent";
import { StyledTheme } from "./types";
import { useTheme } from "@mui/material";

const StyledHeroSegment = styled.div`
  position: relative;
  margin-top: -5em;
`;

const StyledBox = styled.div<StyledTheme>`
  background-color: ${(props) => props.theme.palette.background.default};
  height: 920px;
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button<StyledTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.palette?.primary?.main};
  color: white;
  padding: 15px 10px 15px 10px;
  border: 1px solid white;
`;

const StyledImg = styled.section<StyledTheme>`
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/hero.jpg);
  height: 920px;
  background-size: cover;
  background-position: center;
  width: 100vw;
`;

const HeroSegmentContiner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30vh;
  justify-content: flex-end;
`;

const HeroSegment: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const theme = useTheme();

  console.log("theme", theme.palette.primary.main);
  console.log("background", theme.palette.background.default);

  return (
    <StyledHeroSegment>
      <StyledImg>
        <StyledBox theme={theme}>
          <HeroSegmentContiner>
            <HeroSegmentContent
              title={"MEGBÍZHATÓSÁG, SZAKÉRTELEM"}
              description={
                "BÍZZA OTTHONÁT, GYORS, PRECIZ, HOZZÁÉRTŐ SZAKEMBEREKRE!"
              }
              callToAction={
                <StyledButton theme={theme}>{`KAPCSOLATFELVÉTEL`}</StyledButton>
              }
            />
          </HeroSegmentContiner>
        </StyledBox>
      </StyledImg>
    </StyledHeroSegment>
  );
};

export default HeroSegment;
