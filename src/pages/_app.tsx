/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.scss';
import { useEffect } from 'react';

import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { isReady } = useRouter();

  useEffect(() => {
    if ((window as any)?.M !== undefined && isReady) {
      console.log('isReady', isReady);
      console.log('window', (window as any)?.M);
      const carousel = document.querySelectorAll('.carousel');
      const tooltip = document.querySelectorAll('.tooltipped');
      const changeColor = document?.getElementById?.('color');
      (window as any).M.Carousel.init(carousel);
      (window as any).M.Tooltip.init(tooltip);

      if (changeColor) changeColor.style.display = 'flex';
    }
  }, [isReady, typeof window]);

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
