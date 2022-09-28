import React from "react";
import styled from "styled-components";
import { StyledTheme } from "../common";

const StyledContact = styled.div`
  height: ${(props) => props.theme?.dimensions?.page?.height};
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledContent = styled.div`
  position: relative;
  width: 50vw;
  margin-left: 50vw;
  background-color: rgba(45, 45, 45, 0.8);
  height: ${(props) => props.theme?.dimensions?.page?.height};
  @media (max-width: 834px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: white;
  padding: 3em 0em 2em 0em;
  font-family: Impact, Haettenschweiler;
  font-size: 3rem;
  font-weight: lighter;
  margin: 0;

  @media (max-width: 834px) {
    padding: 3em 0em 2em 0em;
  }
`;

const StyledTextContainer = styled.div`
  text-align: center;
  margin: 0 2em 0 2em;
`;

const StyledContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  margin-left: 4em;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
`;

const StyledImageSection = styled.section`
  position: relative;
  object-fit: fill;
  background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/circularsaw.jpg);
  background-size: cover;
  background-position: center;
  width: 100vw;
`;

const StyledInlineTextNumbers = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
  margin-left: 0.5em;
`;

const StyledInlineText = styled.p`
  font-weight: 200;
  font-size: 1.2em;
  margin-left: 1em;
`;
const StyleLogoContainer = styled.div`
  margin-top: 2.5em;
`;

const Contact: React.FC = (props) => {
  return (
    <StyledContact>
      <StyledImageSection>
        <StyledContent>
          <StyledTitle>{`KAPCSOLAT`}</StyledTitle>

          <StyledTextContainer>
            <StyledContactInfo>
              <img
                src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg"
                alt="logo"
                width={50}
                height={50}
              />

              <StyledInlineTextNumbers>
                <a href="tel:+36205603031">{`+36 20 560 3031`}</a>
              </StyledInlineTextNumbers>
            </StyledContactInfo>
            <StyledContactInfo>
              <img
                src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg"
                alt="logo"
                width={50}
                height={50}
              />

              <StyledInlineTextNumbers>
                <a href="tel:+36202812233">{`+36 20 281 2233`}</a>
              </StyledInlineTextNumbers>
            </StyledContactInfo>
            <StyledContactInfo>
              <img
                src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/envelope.svg"
                alt="logo"
                width={50}
                height={50}
              />

              <StyledInlineText>
                <a href="mailto:bruderbau2021@gmail.com">{`bruderbau2021@gmail.com`}</a>
              </StyledInlineText>
            </StyledContactInfo>
            <StyledContactInfo>
              <img
                src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/house.svg"
                alt="logo"
                width={50}
                height={50}
              />

              <StyledInlineText>{`2030 Érd, Járom utca 10.`}</StyledInlineText>
            </StyledContactInfo>

            <img
              style={{ margin: "2em 0 2em 0" }}
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </StyledTextContainer>
        </StyledContent>
      </StyledImageSection>
    </StyledContact>
  );
};

export default Contact;
