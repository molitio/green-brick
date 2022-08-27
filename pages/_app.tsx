import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";

function GreenBrick({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default GreenBrick;
