import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { page } from "./components/Layout";
const Inscriptions = () => {
  return (
    <>
      <Head>
        <title>{(page = "Inscriptions")}</title>
      </Head>
      <section className="bg-black text-white w-screen h-screen flex flex-col  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-center  sm:w-96 md:w-4/5 my-20 text-3xl md:text-4xl font-bold text-center question-title ">
            Es-tu inscrit sur les listes électorales ?
          </h1>
          <div></div>
          <p className=" mb-20 ml-4 w-8/12 sm:w-7/12 md:w-[22rem] lg:w-3/12 relative xl:w-4/12 xl:text-justify text-xl font-medium infos-advice  ">
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="2x"
              className="text-white mr-2 text-justify absolute info "
            />
            Le savais-tu ? Dès ton recensement, tu es automatiquement inscrit-e sur
            les listes électorales !
          </p>
        </div>
        <div className="flex flex-row justify-around mb-3">
          <button className="rounded-xl bg-gray-500 font-bold uppercase py-1 px-5 text-xl transition-transform delay-150 duration-200 hover:scale-110 response-question">
            <Link href="/oui">OUI</Link>
          </button>
          <button className="rounded-xl bg-gray-500 font-bold uppercase py-1 px-5 text-xl transition-transform delay-150 duration-200 hover:scale-110 response-question">
            <Link href="/non">NON</Link>
          </button>
          <button className="rounded-xl bg-gray-500 font-bold uppercase py-1 px-5 text-xl transition-transform delay-150 duration-200 hover:scale-110 response-question">
            <Link href="/jsp">JSP</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Inscriptions;
