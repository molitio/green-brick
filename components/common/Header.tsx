import React from "react";
import Image from "next/image";
import Header from "next/head";

const AppHeader: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Header>
      <Image
        width={500}
        height={100}
        objectFit="cover"
        src="/../../assets/cover.png"
        alt="cover"
      />
      {children}
    </Header>
  );
};

export default AppHeader;
