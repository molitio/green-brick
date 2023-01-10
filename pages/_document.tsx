import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { getNonce } from "../components";

const generateCsp = (): [csp: string, nonce: string] => {
  const production = process.env.NODE_ENV === "production";
  const nonce = getNonce();

  const csp = `default-src 'self' s3.eu-west-1.amazonaws.com; script-src 'strict-dynamic' 'nonce-${nonce}' ${
    production ? "" : "'unsafe-eval';"
  } ${
    production ? "" : "connect-src 'self';"
  } base-uri 'self'; child-src 'self' www.gstatic.com www.google.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com s3.eu-west-1.amazonaws.com; font-src 'self' fonts.googleapis.com fonts.gstatic.com; object-src 'none';`;

  return [csp, nonce];
};

export default function Document() {
  const [csp, nonce] = generateCsp();

  const textContent = "".concat(
    `„ A legtöbb munkánkat személyes ajánlás alapján kapjuk,`,
    ` mivel minden munkánkat úgy végezzük`,
    ` mintha magunknak csinálnánk! ”`,
    ` Idézet a Brüder Bau Kft. munkatársától
            `
  );

  const imageUrl =
    "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg";

  return (
    <Html lang="hu">
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
        <NextScript nonce={nonce} />
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
    </Html>
  );
}
