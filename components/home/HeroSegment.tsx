import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroSegmentContent from "./HeroSegmentContent";
import { Button } from "@mui/material";

const StyledHeroSegment = styled.div`
  position: relative;
  margin-top: -5em;
  z-index: 100;
  border: 3px dashed purple;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentAlign = styled.div`
  position: relative;
`;

const HeroSegment: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHeroSegment>
      <Box
        sx={{
          backgroundColor: "black",
          height: "700px",
          margin: "0",
          padding: "0",
          zIndex: "100",
          opacity: "0.85",
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
            callToAction={
              <StyledButton>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    display: "flex",
                    borderRadius: "0",
                    border: "solid white 1px",
                    padding: "10px 5px  10px 5px   ",
                    position: "relative",
                    /* top: "64vh", */
                    backgroundColor: "rgba(36, 171, 14,0.6)",
                    justifyContent: "flex-end",
                    marginTop: "14%",
                  }}
                >
                  {`KAPCSOLATFELVÉTEL`}
                </Button>
              </StyledButton>
            }
          />
        </div>

        <Image
          style={{ zIndex: "-1", opacity: "0.3" }}
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
