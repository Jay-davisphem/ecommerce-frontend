import { AppProps } from "next/app";
import { ReactElement } from "react";
import "../styles/global.scss";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
