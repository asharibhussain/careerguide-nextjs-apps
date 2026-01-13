import React from 'react';
import Script from 'next/script';

const NextScript = () => {
  return (
    <>
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="https://code.jquery.com/jquery-2.2.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
      <Script src="/plugins/slick/main.js" strategy="lazyOnload" />
      <Script src="/plugins/slick/slick.js" strategy="lazyOnload" />
      <Script src="/plugins/slick/slick.min.js" strategy="lazyOnload" />
    </>
  );
};

export default NextScript;
