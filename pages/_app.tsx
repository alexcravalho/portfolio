import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Alex's Portfolio"}</title>
        <meta
          name="description"
          content="A personal portfolio for software engineer Alex Cravalho."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
