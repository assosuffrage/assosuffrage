import Head from "next/head";


const Layout = ({ children, page }) => {
  return (
    <div className="w-full grid  m-0 p-0 place-content-center   ">
      <Head>
      <meta charSet="utf-8" />
        <title>{page}</title>
      </Head>
      <header>
        
      </header>
      <main className=" bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700  flex flex-col justify-center items-center  ">
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
