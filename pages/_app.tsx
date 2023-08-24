import type { AppProps } from "next/app";
import Layout from "../components";
import Header from "../components";

import "./style.scss";

function GreenBrick({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <title>Bruderbau Kft.</title>
      <meta property="og:title" content="Bruderbau Kft." key="title" />
      {/*       <script
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: `window.__webpack_nonce__ = "${nonce}"`,
        }}
      /> */}
    </Header>
  );
}

export default GreenBrick;
