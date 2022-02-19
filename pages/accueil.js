import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { page } from "./components/Layout";

import neon from "../src/neon.mp3";

const Accueil = () => {
  return (
    <>
      <Head>
        <title>{(page = "Accueil")}</title>
      </Head>
      <div className="text-white bg-black w-full h-screen flex justify-center flex-col items-center">
        <h1
          className=" text-3xl md:text-8xl lg:text-9xl font-bold pl-2 mb-8  z-50 "
          id="calendar"
        >
          <span className="suff">SUFF</span>
          <span className="rage">RAGE</span>
        </h1>

        <audio controls autoPlay src={neon} hidden>
          Your browser does not support the
          <code>audio</code> element.
        </audio>

        <button className=" mt-12 font-bold text-xs sm:text-sm md:text-md z-50 bg-gray-600 rounded-3xl p-3 subscribe cursor-pointer transition-transform delay-200 duration-500 ease-in-out outline-none hover:scale-125 ">
          <Link href="/inscriptions">
            S'inscrire sur les listes électorales
          </Link>
        </button>

        <div className=" absolute bottom-2 animate-bounce z-50 ">
          <button aria-label="swipe-up">
            <Link href="/calendrier">
              <a alt="lien vers la page calendrier" aria-hidden="false">
                <FontAwesomeIcon icon={faAngleUp} size="3x" />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Accueil;
