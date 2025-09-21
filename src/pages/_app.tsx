import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
