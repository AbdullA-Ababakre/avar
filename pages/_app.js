import '../styles/globals.css'
import 'antd/dist/antd.css';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
