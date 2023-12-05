import { AppProps } from "next/app";
import Head from "next/head";
// styles
import "../theme/index.scss";
import Image from "next/image";
import { ThemeProvider } from "@bright-resume/components";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Welcome to web! </title>
      </Head>
      <Image
        src="/assets/image/logo-with-typography-horizontal-dark.png"
        alt="logo-with-typography-horizontal"
        width={300}
        height={300}
      />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
