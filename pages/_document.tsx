import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { getNonce } from "../components";

const generateCsp = (): [csp: string, nonce: string] => {
  const production = process.env.NODE_ENV === "production";
  const nonce = getNonce();

  const csp = `default-src 'self' s3.eu-west-1.amazonaws.com; script-src 'self' 'strict-dynamic' 'nonce-${nonce}' ${
    production ? "" : "'unsafe-eval'"
  } www.gstatic.com www.google.com vercel.live; ${
    production ? "" : "connect-src 'self';"
  } base-uri 'self'; child-src 'self' www.gstatic.com www.google.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com s3.eu-west-1.amazonaws.com; font-src 'self' fonts.googleapis.com fonts.gstatic.com; object-src 'none';`;

  return [csp, nonce];
};

export default function Document() {
  const [csp, nonce] = generateCsp();

  return (
    <Html lang="hu">
      <Head nonce={nonce}>
        <meta property="csp-nonce" content={nonce} />
        <meta httpEquiv="Content-Security-Policy" content={csp} />
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

{
  /*   <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
        </script>
        <script type="text/javascript">
          (function(){
            ;
   })();
        </script> */
}
