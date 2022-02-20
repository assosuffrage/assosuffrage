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
const Oui = () => {
  return (
    <>
      <Head>
        <title>{(page = "Oui")}</title>
      </Head>
      <div
        className="bg-black
            text-white w-full yes-container sm:h-screen  xl:h-screen  flex flex-col justify-center items-center "
      >
        <h1 className="flex justify-center md:4/5  my-4 text-2xl md:text-4xl font-bold text-center ouititle ">
          Désormais il s'agit de connaître ton bureau de vote !
        </h1>
        <div className="relative">
          <button className="rounded-3xl bg-gray-300 p-4  mb-8">
            <Link href="https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE">
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
       
        <p className=" mb-20 w-9/12 sm:w-7/12 relative md:w-4/12 lg:w-3/12 xl:w-2/12 font-medium  text-white">
          <FontAwesomeIcon
            icon={faInfoCircle}
            size="2x"
            className="text-white  absolute info-inscription"
          />
          Si jamais ton bureau de vote n'est pas le bon il te suffit de te munir
          en format dématérialisé de ta <span className="underline font-semibold">pièce d'identité</span> et d'un <span className="underline font-semibold">justificatif de
          domicile</span> justificatif de
          domicile Et n'oublie pas de préciser tous tes prénoms !
        </p>
        <div className="flex flex-col items-center place-self-end  mb-3 md:mb-11 relative">
          <p className="place-self-end mr-3 mb-2 w-60  text-white font-medium ">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              size="2x"
              className="text-green-500  mr-2"
            />
            Si jamais tu n'es pas là pour les élections, tu peux faire une
            procuration :
          </p>
          <button className="place-self-end mr-3 rounded-3xl bg-gray-300 p-4">
            <Link href="https://www.service-public.fr/particuliers/vosdroits/F1604">
              <a target="_blank" rel="noopener" className="text-black">
                C'est par ici
              </a>
            </Link>
          </button>

          <FontAwesomeIcon
            icon={faHandPointRight}
            size="2x"
            className="text-white mt-2 absolute  bottom-3 right-36 "
          />
        </div>
      </div>
    </>
  );
};

export default Oui;
