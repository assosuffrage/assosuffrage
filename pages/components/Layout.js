import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children, page }) => {
  return (
    <div className="w-screen grid  m-0 p-0 place-content-center   ">
      <Head>
      <meta charSet="utf-8" />
      <link
            rel="preload"
            href="/webfontkit/inlander_outline_rough-webfont.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/webfontkit/inlander_outline_rough-webfont.woff2"
            as="font"
            crossOrigin=""
          />
          
        <title>{page}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="   ">
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
