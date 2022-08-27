import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledMain = styled.main`
  width: 100px;
  height: 100vh;
`;

const StyledCoverImage = styled.div`
  opacity: 0.8;
`;

const Home: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledMain>
      {"home"}
      <StyledCoverImage>
        <Image
          objectFit="cover"
          layout="fill"
          src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero_4k.jpg`}
          alt="cover"
        />
      </StyledCoverImage>
      {children}
    </StyledMain>
  );
};
export default Home;
