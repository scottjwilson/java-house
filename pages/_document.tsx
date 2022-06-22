import Document, {
  DocumentContext,
  Html,
  Head,
  NextScript,
  Main,
} from "next/document";

import { ReactElement } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return (
      <Html lang="en" data-theme="fantasy">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,400;0,600;0,700;0,800;1,800&display=swap"
              rel="stylesheet"
            />
   */}
          {/* <link rel="manifest" href="/site.webmanifest" /> */}

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* <meta name="theme-color" content="#eeeae6" /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
