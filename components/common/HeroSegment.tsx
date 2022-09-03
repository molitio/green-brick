import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroSegmentContent from "../common/HeroSegmentContent";

const StyledHeroSegment = styled.div`
  position: relative;
  margin-top: -5em;
  /* z-index: 100; */
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(36, 171, 14, 0.5);
  color: white;
  z-index: 9000;
  padding: 10px 5px 10px 5px;
  border: 1px solid white;
`;

const HeroSegment: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHeroSegment>
      <Box
        sx={{
          backgroundColor: "rgba(45, 45, 45, 0.8)",
          height: "700px",
          margin: "0",
          padding: "0",
          zIndex: "100",
        }}
      >
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
            callToAction={<StyledButton>{`KAPCSOLATFELVÉTEL`}</StyledButton>}
          />
        </div>

        <Image
          style={{ zIndex: "-1", opacity: "1" }}
          objectFit="cover"
          layout="fill"
          src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero_4k.jpg`}
          alt="cover"
        />
      </Box>
    </StyledHeroSegment>
  );
};

export default HeroSegment;
