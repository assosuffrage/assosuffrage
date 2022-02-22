import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faExclamationTriangle,
  faHandPointUp,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import service from "../src/service-public2.png";
import service2 from "../src/service-public3.png";
import { page } from "./components/Layout";
import Procuration from "./components/procuration";
const Non = () => {
  return (
    <>
      <Head>
        <title>{(page = "Non")}</title>
      </Head>
      <div
        className="bg-black
            text-white w-full   non-container sm:h-screen  xl:h-screen flex flex-col justify-start items-center"
      >
        <h1 className="flex justify-center md:4/5  xl:w-11/12  text-2xl md:text-4xl font-bold text-center ouititle ">
        Munis-toi en format dématérialisé de ta carte d'identité et d'un justificatif de domicile 
        </h1>
        <div className="relative mt-6 md:mt-12">
          <button className="rounded-3xl bg-gray-300 p-4 mb-8">
            <Link href="https://www.inscriptionelectorale.service-public.fr/">
              <a target="_blank" rel="noopener" className="text-black">
                C'est par ici
              </a>
            </Link>
          </button>
          <FontAwesomeIcon
            icon={faHandPointUp}
            size="2x"
            className="text-white absolute hand"
          />
        </div>
        <Procuration />
      </div>
    </>
  );
};

export default Non;
