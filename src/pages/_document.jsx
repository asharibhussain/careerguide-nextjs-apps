import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/assets/image/favicon.png" rel="icon" />
          <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
          <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          {/* <link href="/plugins/slick/slick-theme.min.css"rel="stylesheet" /> */}
          {/* <link href="/plugins/slick/slick.min.css" rel="stylesheet"/> */}
          <link href="/assets/css/custom.css" rel="stylesheet" />
        </Head>
        <body>

          <Main />
          <NextScript />
          <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
          <script  src="/assets/vendor/aos/aos.js"/>
          <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
          <script src="/assets/vendor/glightbox/js/glightbox.min.js"/>
          <script src="/assets/vendor/swiper/swiper-bundle.min.js" />
          <script  src="/assets/js/main.js"/>
          <script src="https://code.jquery.com/jquery-2.2.0.min.js"/>
          
          <script src="/plugins/slick/main.js"/>
          <script src="/plugins/slick/slick.js" />
          <script src="/plugins/slick/slick.min.js"/>
          
          
        </body >
      </Html >
    );
  }
}

export default MyDocument;