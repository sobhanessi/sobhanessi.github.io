import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {/* persian fonts */}
      <link rel="stylesheet" href="//unpkg.com/@raha.group/persian-fonts" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
