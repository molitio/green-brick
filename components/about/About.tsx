import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledAbout = styled.div`
  height: 100vh;
  position: relative;
`;
1;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 50vw;
  background-color: rgba(45, 45, 45, 0.8); ;
`;

const StyledTitle = styled.h1`
  color: white;
  padding: 0px 0px 0px 70px;
  font-family: Impact, Haettenschweiler;
  font-size: 300%;
  font-weight: lighter;
`;

const StyledTextContainer = styled.div`
  text-align: left;
  padding: 0px 100px 0px 70px;
  margin-top: -250px;
  margin-bottom: -100px;
  width: 60%;
`;

const StyledText = styled.h3`
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const About: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledAbout>
      <StyledContent>
        <StyledTitle>{`RÓLUNK`}</StyledTitle>
        <StyledTextContainer>
          <StyledText>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin diam et pulvinar accumsan. Aenean risus tortor, ullamcorper in pharetra congue, posuere nec neque. Donec semper, magna sed pellentesque fringilla, quam leo porttitor ante, et fringilla nunc velit eu arcu. Nam sit amet felis tortor.`}</StyledText>
        </StyledTextContainer>
        <StyledLogo>
          <Image
            src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
            alt="logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </StyledLogo>
      </StyledContent>
      <Image
        style={{ opacity: "1", zIndex: "-1" }}
        objectFit="cover"
        layout="fill"
        src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/grindingmachine.jpg`}
        alt="cover-about"
      />
      <Image
        style={{ opacity: "1", zIndex: "-1" }}
        objectFit="cover"
        layout="fill"
        src={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/grindingmachine.jpg`}
        alt="cover-about"
      />
    </StyledAbout>
  );
};

export default About;
