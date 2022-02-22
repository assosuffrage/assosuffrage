import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
const Jsp = () => {
  return (
    <>
      <Head>
        <title>{(page = "Jsp")}</title>
      </Head>
      <div
        className="bg-black
            text-white w-full  yes-container sm:h-screen  xl:h-screen flex flex-col justify-start items-center"
      >
        <h1 className="flex justify-center md:4/5  my-4 text-2xl md:text-4xl font-bold text-center ouititle ">
          Vérifie ton inscription électorale en faisant une simulation !
        </h1>
        <div className="relative mt-6 md:mt-12">
          <button className="rounded-3xl bg-gray-300 p-4 mb-8">
            <Link href="https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE">
              <a target="_blank" rel="noopener" className="text-black">
                C'est par ici
              </a>
            </Link>
          </button>
          <FontAwesomeIcon
            icon={faHandPointUp}
            size="2x"
            className="text-white absolute hand "
          />
        </div>
        
        <p className=" mb-20 w-9/12 sm:w-7/12 relative md:w-4/12 lg:w-3/12 xl:w-2/12 font-medium text-white">
          <FontAwesomeIcon
            icon={faInfoCircle}
            size="2x"
            className="text-white absolute info-inscription"
          />
          Si jamais tu n'es pas inscrit il te suffit de te munir en format
          dématérialisé de ta <span className="underline font-semibold">pièce d'identité</span> et d'un <span className="underline font-semibold">justificatif de domicile</span>  {" "}
          <br /> <br />
          <strong> Et n'oublie pas de préciser tous tes prénoms !</strong>
        </p>
        <Procuration />
      </div>
    </>
  );
};

export default Jsp;
