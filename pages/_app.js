import Layout from './components/Layout';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/style.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { page } from "./components/Layout";

library.add(fab, fas);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><title>{ page }</title></Head>
      <Layout >
        <Component {...pageProps} />
      </Layout> 
    </>
  )
}

export default MyApp
