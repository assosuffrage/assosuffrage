import Head from "next/head";
import { page } from "./components/Layout";
const Rejoindre = () => {
  return (
    <>
      <Head>
        <title>{(page = "rejoindre")}</title>
      </Head>
      <section className=" text-white bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500 w-screen h-screen flex justify-center flex-col items-center">
        <iframe
          id="haWidget"
          allowtransparency="true"
          scrolling="auto"
          src="https://www.helloasso.com/associations/suffrage/adhesions/rejoindre-suffrage/widget"
          className="w-screen h-screen border-none"
          onload="window.scroll(0, this.offsetTop)"
        ></iframe>
      </section>
    </>
  );
};

export default Rejoindre;
