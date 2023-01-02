import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import emailjs from "@emailjs/browser";

export default function Document() {
  return (
    <Html>
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      />

      <Script
        id="emailClient"
        strategy="beforeInteractive"
        onLoad={() => emailjs.init(process.env.EMAILJS_API_KEY ?? "")}
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
