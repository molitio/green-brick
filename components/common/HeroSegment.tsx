import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroSegmentContent from "../common/HeroSegmentContent";
import { StyledTheme } from "./types";
import { useTheme } from "@mui/material";

const StyledHeroSegment = styled.div`
  position: relative;
  margin-top: -5em;
`;

const StyledBox = styled.div<StyledTheme>`
  background-color: ${(props) => props.theme.palette.background.default};
  height: 700px;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

const StyledButton = styled.button<StyledTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme?.palette?.primary?.main};
  color: white;
  z-index: 9000;
  padding: 10px 5px 10px 5px;
  border: 1px solid white;
`;

const HeroSegment: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const theme = useTheme();

  console.log("theme", theme.palette.primary.main);
  console.log("background", theme.palette.background.default);

  return (
    <StyledHeroSegment>
      <StyledBox theme={theme}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: "30vh",
            justifyContent: "flex-end",
          }}
        >
          <HeroSegmentContent
            title={"MEGBÍZHATÓSÁG, SZAKÉRTELEM"}
            description={
              "BÍZZA OTTHONÁT, GYORS, PRECIZ, HOZZÁÉRTŐ SZAKEMBEREKRE!"
            }
            callToAction={
              <StyledButton theme={theme}>{`KAPCSOLATFELVÉTEL`}</StyledButton>
            }
          />
        </div>
        <img
          style={{ zIndex: "-1", opacity: "1" }}
          src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero_4k.jpg`}
          alt="cover"
        />
      </StyledBox>
    </StyledHeroSegment>
  );
};

export default HeroSegment;
