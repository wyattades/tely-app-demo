import Head from 'next/head';
import type { AppProps } from 'next/app';
// import 'raf/polyfill'; // TODO: necessary?

import { OuterProvider, InnerProvider } from 'app/provider';

function App(appProps: AppProps) {
  return (
    <>
      <Head>
        <title>Tely</title>
        <meta name="description" content="Tely is a demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OuterProvider>
        <InnerProvider {...appProps} />
      </OuterProvider>
    </>
  );
}

export default App;
