import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeaderTitle from "./HeaderTitle";
import { Button } from "@mui/material";

const StyledHeader = styled.div`
  position: relative;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentAlign = styled.div`
  position: relative;
`;

const Header: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledHeader>
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
          <HeaderTitle />
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
              KAPCSOLATFELVÉTEL
            </Button>
          </StyledButton>
        </div>

        <Image
          style={{ zIndex: "-1", opacity: "0.3" }}
          objectFit="cover"
          layout="fill"
          src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero_4k.jpg`}
          alt="cover"
        />
      </Box>
    </StyledHeader>
  );
};

export default Header;
