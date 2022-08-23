import React from "react";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      hi layout
      <br />
      {children}
    </>
  );
};

export default Layout;
