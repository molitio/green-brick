import React from "react";
import styled from "styled-components";
import ContactTableRow from "./ContactTableRow";
import ContactTable from "./ContextTable";

const StyledContact = styled.div`
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledContent = styled.div`
  height: max-content;
  position: relative;
  width: 50vw;
  margin-left: 50vw;
  background-color: ${(props) => props.theme.palette.background.default};

  @media (max-width: 834px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: white;
  padding: 3em 0em 2em 0em;
  font-size: 3rem;
  margin: 0;

  @media (max-width: 834px) {
    padding: 3em 0em 2em 0em;
  }
`;

const StyledContactContainer = styled.div`
  margin: 0 2em 0 2em;
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
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  margin-left: 0.5em;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const StyledInlineText = styled.p`
  color: ${(props) => props.theme?.palette?.text?.primary};
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 200;
  font-size: 1.1rem;
  margin-left: 1em;
  @media (max-width: 400px) {
    font-size: 0.91em;
  }
`;

const StyledContactInfoIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledContactInfoIconContainer = styled.div`
  text-align: center;
  width: auto;
`;

const StyledContactLogo = styled.img`
  margin: 4em 0 2em 0;
  width: 100px;
  height: 100px;
`;

const StyledContactInfoAnchor = styled.a`
  font-family: Helvetica, Arial, sans-serif;
  color: ${(props) => props.theme?.palette?.text?.primary};
`;

const StyledInlineTextAddress = styled.p`
  color: ${(props) => props.theme?.palette?.text?.primary};
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  margin-left: 1em;
  margin-bottom: 0;

  @media (max-width: 400px) {
    font-size: 0.99em;
  }
`;

const Contact: React.FC = (props) => {
  return (
    <StyledContact>
      <StyledImageSection>
        <StyledContent>
          <StyledTitle>{`KAPCSOLAT`}</StyledTitle>
          <StyledContactContainer>
            <ContactTable
              rows={[
                <ContactTableRow
                  key="phone1"
                  icon={
                    <StyledContactInfoIcon
                      src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg"
                      alt="logo"
                    />
                  }
                  iconSpacing={{
                    margin: "0 0 0 -10px",
                  }}
                  text={
                    <StyledInlineTextNumbers>
                      <StyledContactInfoAnchor href="tel:+36205603031">{`+36 20 560 3031`}</StyledContactInfoAnchor>
                    </StyledInlineTextNumbers>
                  }
                />,
                <ContactTableRow
                  key="phone2"
                  icon={
                    <StyledContactInfoIcon
                      src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg"
                      alt="logo"
                    />
                  }
                  iconSpacing={{
                    margin: "0 0 0 -10px",
                  }}
                  text={
                    <StyledInlineTextNumbers>
                      <StyledContactInfoAnchor href="tel:+36202812233">{`+36 20 281 2233`}</StyledContactInfoAnchor>
                    </StyledInlineTextNumbers>
                  }
                />,
                <ContactTableRow
                  key="email1"
                  icon={
                    <StyledContactInfoIcon
                      src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/envelope.svg"
                      alt="logo"
                    />
                  }
                  text={
                    <StyledInlineText>
                      <StyledContactInfoAnchor href="mailto:bruderbau2021@gmail.com">{`bruderbau2021@gmail.com`}</StyledContactInfoAnchor>
                    </StyledInlineText>
                  }
                />,
                <ContactTableRow
                  key="address1"
                  icon={
                    <StyledContactInfoIcon
                      src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/house.svg"
                      alt="logo"
                    />
                  }
                  iconSpacing={{
                    margin: "0 0 0 -5px",
                  }}
                  text={
                    <StyledInlineTextAddress>{`2030 Érd, Járom utca 10.`}</StyledInlineTextAddress>
                  }
                />,
              ]}
            />
          </StyledContactContainer>
          <StyledContactInfoIconContainer>
            <StyledContactLogo
              src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg"
              alt="logo"
            />
          </StyledContactInfoIconContainer>
        </StyledContent>
      </StyledImageSection>
    </StyledContact>
  );
};

export default Contact;
