import { ReactElement } from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

/*
_document.tsx is a class component because it requires to extend Next's React classes.
*/
export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          {/* // TODO: use correct logo 
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
