import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children, page }) => {
  return (
    <div className="w-full flex justify-center flex-col  m-0 p-0 place-content-center ">
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Asso SUFFRAGE, association Bordeaux Jeunes " />
        <meta name="description" content="faciliter l'accès à la vie politique et créer un espace de débat démocratique pour la jeunesse" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
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
