import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="../public/fonts/inlander_outline_rough-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="../public/fonts/inlander_outline_rough-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link rel="shortcut icon" href="/favicon_suffrage1.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
