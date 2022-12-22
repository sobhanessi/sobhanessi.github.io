// import React from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
// import { ServerStyleSheets } from "@mui/styles";

// class MyDocument extends Document {
//   render(): JSX.Element {
//     return (

//     );
//   }
// }

// MyDocument.getInitialProps = async (ctx) => {
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };

// export default MyDocument;

//////////////////////////////////////////////////////////////////////
// final version

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
// import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
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
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// MyDocument.getInitialProps = async (ctx) => {
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };
//////////////////////////////////////////////////////////////////////
