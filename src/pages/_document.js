import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <script type="text/javascript">
            {" "}
            window.HAGRID_WEBSITE_ID = "eclbjy";
          </script>
          <script
            async
            type="text/javascript"
            src="https://static.hgrd.app/build/main.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
