import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";

const StyledCardBoxCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: rgba(36, 171, 14, 0.5);
`;
const StyledMirroredImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: rgba(36, 171, 14, 0.5);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const cardContents = [
  {
    title: "BONTÁS",
    content: "Lorem Ipsum is simply dummy text of the printing.",
    url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/hammer.png",
  },
  {
    title: "FESTÉS",
    content: "Lorem Ipsum is simply dummy text of the printing.",
    url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/paintroller.png",
  },
  {
    title: "BURKOLÁS",
    content: "Lorem Ipsum is simply dummy text of the printing.",
    url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/wheelbarrow.png",
  },
  {
    title: "JAVÍTÁS",
    content: "Lorem Ipsum is simply dummy text of the printing.",
    url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/drill.png",
  },
];

cardContents.map((content) => {
  console.log(content.title);
});

const CardBoxCard: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <StyledCardBoxCards>
      <div style={{ display: "flex", width: "275px", margin: "0" }}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            width: "130px",
            height: "130px",
            marginRight: "15px",
          }}
        >
          <StyledImage>
            <Image
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContents[0].url}`}
              alt="hammer"
            />
          </StyledImage>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "120px" }}
        >
          <h2
            style={{ marginTop: "0", fontFamily: "Impact, Haettenschweiler" }}
          >
            {cardContents[0].title}
          </h2>
          <p style={{ marginTop: "0" }}>{cardContents[0].content}</p>
        </div>
      </div>
      <div style={{ display: "flex", width: "275px" }}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            width: "130px",
            height: "130px",
            marginRight: "15px",
          }}
        >
          <StyledImage>
            <Image
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContents[1].url}`}
              alt="hammer"
            />
          </StyledImage>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "120px" }}
        >
          <h2
            style={{ marginTop: "0", fontFamily: "Impact, Haettenschweiler" }}
          >
            {cardContents[1].title}
          </h2>
          <p style={{ marginTop: "0" }}>{cardContents[1].content}</p>
        </div>
      </div>
      <div style={{ display: "flex", width: "275px" }}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            width: "130px",
            height: "130px",
            marginRight: "15px",
          }}
        >
          <StyledImage>
            <Image
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContents[2].url}`}
              alt="hammer"
            />
          </StyledImage>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "120px" }}
        >
          <h2
            style={{ marginTop: "0", fontFamily: "Impact, Haettenschweiler" }}
          >
            {cardContents[2].title}
          </h2>
          <p style={{ marginTop: "0" }}>{cardContents[2].content}</p>
        </div>
      </div>
      <div style={{ display: "flex", width: "275px" }}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            width: "130px",
            height: "130px",
            marginRight: "15px",
          }}
        >
          <StyledMirroredImage>
            <Image
              style={{ opacity: "0.4" }}
              width={92.15}
              height={76.02}
              src={`${cardContents[3].url}`}
              alt="hammer"
            />
          </StyledMirroredImage>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "120px" }}
        >
          <h2
            style={{ marginTop: "0", fontFamily: "Impact, Haettenschweiler" }}
          >
            {cardContents[3].title}
          </h2>
          <p style={{ marginTop: "0" }}>{cardContents[3].content}</p>
        </div>
      </div>
    </StyledCardBoxCards>
  );
};

export default CardBoxCard;
