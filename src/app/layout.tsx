import { ReactNode } from 'react';

import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Metadata } from 'next';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { Inter, Inconsolata } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-Inconsolata',
});

export const metadata: Metadata = {
  title: 'Rafael Santana',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  const locale = useLocale();

  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <title>Rafael Santana</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <meta name="description" content={messages?.Document?.description} />
        <meta
          name="keywords"
          content={`${messages?.Document?.developer}, Mobile, React Js, React Native, Rafael Santana, developer, mobile developer, web developer, front-end developer, back-end developer, full-stack developer `}
        />
        {/* Open Graph / Facebook */}
        <meta
          property="og:description"
          content={messages?.Document?.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafaelsantana.dev/" />
        <meta property="og:title" content="Rafael Santana" />
        <meta
          property="og:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* Twitter */}
        <meta
          property="twitter:description"
          content={messages?.Document?.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rafaelsantana.dev" />
        <meta property="twitter:title" content="Rafael Santana" />
        <meta
          property="twitter:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* SEO */}
        <link rel="canonical" href="https://rafaelsantana.dev/" />
      </head>
      <body className={`${inter.variable} ${inconsolata.variable}`}>
        <ThemeRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div>{children}</div>
          </NextIntlClientProvider>
        </ThemeRegistry>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag() { dataLayer.push(arguments); }
           gtag('js', new Date());
       
           gtag('config', '${analyticsId}');
        `}
        </Script>
      </body>
    </html>
  );
}
