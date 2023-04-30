import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/jquery-migrate.min.js"
          strategy="lazyOnload"
        />
        <Script
          async
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script async src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script async src="/assets/js/slick.js" strategy="lazyOnload" />
        <Script
          async
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          async
          src="/assets/js/isotope.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          async
          src="/assets/js/jquery.magnific-popup.js"
          strategy="lazyOnload"
        />
        <Script
          async
          src="/assets/js/jquery.nice-select.js"
          strategy="lazyOnload"
        />
        <Script async src="/assets/js/flatpicker.js" strategy="lazyOnload" />
        <Script
          async
          src="/assets/js/nouislider-8.5.1.min.js"
          strategy="lazyOnload"
        />
        <Script async src="/assets/js/intlTelInput.js" strategy="lazyOnload" />
        <Script async src="/assets/js/main.js" strategy="lazyOnload" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
