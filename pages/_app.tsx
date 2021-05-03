import type { FC } from 'react';
import type { AppProps } from 'next/app';
// import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
