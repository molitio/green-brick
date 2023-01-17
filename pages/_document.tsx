import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { getNonce, NonceContextProvider } from "../components";
import { NonceContext } from "../context";

const generateCsp = (nonce: string): [csp: string] => {
  const production = process.env.NODE_ENV === "production";

  const policies = [
    "default-src 'self'",
    `script-src 'self' ${production ? "" : "'unsafe-eval'"}`,
    `${production ? "" : "connect-src 'self'"}`,
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com s3.eu-west-1.amazonaws.com",
    "font-src 'self' fonts.googleapis.com fonts.gstatic.com",
    "object-src 'none'",
    "img-src 'self' data: s3.eu-west-1.amazonaws.com",
  ];

  const csp = policies?.join("; ");

  return [csp, nonce];
};

export default function Document() {
  const nonceContext = React.useContext(NonceContext);

  const nonce = nonceContext.nonce;
  const [csp] = generateCsp(nonce);

  const textContent = "".concat(
    `„ A legtöbb munkánkat személyes ajánlás alapján kapjuk,`,
    ` mivel minden munkánkat úgy végezzük`,
    ` mintha magunknak csinálnánk! ”`,
    ` Idézet a Brüder Bau Kft. munkatársától.`
  );

  const imageUrl =
    "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg";

  return (
    <Html lang="hu">
      <NonceContextProvider>
        <Head nonce={nonce}>
          <meta property="csp-nonce" content={nonce} />
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <meta name="description" content={textContent} />
          <meta property="og:title" content={"Bruderbau Kft"} />
          <meta property="og:description" content={textContent} />
          <meta property="og:image" content={imageUrl} />
          <meta
            property="og:url"
            content="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg"
          />
          <meta property="og:type" content="website" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <Script
          nonce={nonce}
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />

        <Script
          nonce={nonce}
          id="emailClient"
          strategy="beforeInteractive"
          onLoad={() =>
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? "")
          }
        />
        <Script
          strategy="lazyOnload"
          nonce={nonce}
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
        />
      </NonceContextProvider>
    </Html>
  );
}
