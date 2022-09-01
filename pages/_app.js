import React from "react";
// import Script from "next/script";
import Head from "next/head";
// import "../global.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pics/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pics/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pics/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* title */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}
