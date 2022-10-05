import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ShopProvider } from "../context/ShopContext";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
