// import Script from "next/script";
import Head from "next/head";
// import "../global.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
