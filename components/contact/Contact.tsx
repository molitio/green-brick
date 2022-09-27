import { useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";
const StyledContact = styled.div<StyledTheme>`
  height: ${(props) => props.theme.spacing.page.height};
  position: relative;
  display: flex;
  justify-content: flex-end;
  border: 3px solid purple;
`;

const StyledContent = styled.div`
  border: 3px solid orange;
  bottom: 0px;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: rgba(45, 45, 45, 0.8);

  @media (max-width: 834px) {
    width: 100vw;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  padding: 80px 0px 0px 70px;
  font-family: Impact, Haettenschweiler;
  font-size: 300%;
  font-weight: lighter;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  @media (max-width: 834px) {
    padding: 100px 0px 40px 70px;
  }
`;

const StyledTextContainer = styled.div`
  text-align: left;
  padding: 0px 70px 0px 100px;
  width: 20em;
`;
const StyledText = styled.h3`
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  justify-content: flex-start;
`;

const StyledImageSection = styled.section`
  position: relative;
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/circularsaw.jpg);
  background-size: cover;
  background-position: center;
  width: 100vw;
  transform: scaleX(-1);
`;

const Contact: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { id } = props;

  const theme = useTheme();

  return (
    <StyledContact theme={theme} id={id}>
      <StyledImageSection>
        <StyledContent>
          <StyledTitle>{`KAPCSOLAT`}</StyledTitle>
          <StyledTextContainer>
            <StyledText>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin diam et pulvinar accumsan. Aenean risus tortor, ullamcorper in pharetra congue, posuere nec neque. Donec semper, magna sed pellentesque fringilla, quam leo porttitor ante, et fringilla nunc velit eu arcu. Nam sit amet felis tortor.`}</StyledText>
          </StyledTextContainer>
        </StyledContent>
      </StyledImageSection>
    </StyledContact>
  );
};

export default Contact;
