import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
const persistor = persistStore(store);
import { Raleway, IBM_Plex_Sans } from "@next/font/google";
// add bootstrap css
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const raleway = Raleway({ subsets: ["latin"] });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}</style>
      <Head>
        <title> Shopee</title>
        <meta
          name="discription"
          content="on-line magazin for shoping goods"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
