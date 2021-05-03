import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  static render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="application-name" content="OpenCepa" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="OpenCepa" />
          <meta name="description" content="OpenCepa App" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#059669" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/static/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon/180x180.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="OpenCepa" />
          <meta name="twitter:description" content="OpenCepa App" />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/image/icons/icon-192x192.png"
          />
          <meta name="twitter:creator" content="@CannawareIO" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="OpenCepa" />
          <meta property="og:description" content="OpenCepa App" />
          <meta property="og:site_name" content="OpenCepa" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="https://yourdomain.com/og.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
