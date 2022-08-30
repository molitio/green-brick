import React from "react";

import styled from "styled-components";

const StyledCoverImage = styled.div`
  position: relative;
  /* top: 29vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: "1";
  margin-left: 20px;
  margin-right: 20px;
`;

const HeaderTitle: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <StyledCoverImage>
      <h1
        style={{
          display: "flex",
          fontFamily: "Impact, Haettenschweiler",
          fontSize: "370%",
          color: "white",
          margin: "0",
          textAlign: "center",
          /* textAlign: "start", */
        }}
      >
        {`MEGBÍZHATÓSÁG, SZAKÉRTELEM`}
      </h1>
      <h3
        style={{
          display: "flex",
          fontFamily: " 'Roboto', sans-serif",
          color: "white",
          margin: "0",
          textAlign: "center",
          /* textAlign: "start", */
        }}
      >
        {`BÍZZA OTTHONÁT, GYORS, PRECIZ, HOZZÁÉRTŐ SZAKEMBEREKRE!`}
      </h3>
    </StyledCoverImage>
  );
};
export default HeaderTitle;
