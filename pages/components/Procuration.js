import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faExclamationTriangle,
  faHandPointUp,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

const Procuration = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:absolute lg:bottom-4 lg:place-self-end lg:mr-12  mt-24 mb-6 relative border-2 border-gray-300 p-1 xl:mr-5">
          <p className="place-self-end mr-3 mb-2 w-60 text-white font-medium">
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
    );
};

export default Procuration;