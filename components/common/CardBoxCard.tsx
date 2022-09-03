import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledCardBoxCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cardContents = [
  {
    title: "BONTÁS",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "FESTÉS",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "BURKOLÁS",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "JAVÍTÁS",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const CardBoxCard: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <StyledCardBoxCard>
      {
        <Box>
          cardContents.map(<h1></h1>)
        </Box>
      }
    </StyledCardBoxCard>
  );
};

export default CardBoxCard;
