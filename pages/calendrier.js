import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { page } from "./components/Layout";
import Actualite from "./actualite";

const Menu = () => {
  return (
    <>
      <Head>
        <title>{(page = "Calendrier")}</title>
      </Head>
      <div className="bg-black">
        <section className="text-white w-screen  lg:h-full xl:w-full  flex  justify-center flex-col items-center ">
          <Fade cascade triggerOnce direction={"top"}>
            <div className="text-white flex flex-row-reverse ">
              <h1 className=" font-bold  text-2xl sm:text-3xl md:text-5xl glacial-title ">
                CALENDRIER ÉLECTORALES :
              </h1>
              <span className="pr-4 mt-2 invisible sm:visible ">
                <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
              </span>
            </div>

            <div className="flex flex-col justify-center z-0  font-medium">
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 23 JANVIER :
                FERMETURE DES INSCRIPTIONS POUR LA PRIMAIRE POPULAIRE{" "}
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 27 AU 30
                JANVIER : PRIMAIRES POPULAIRES
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 2 MARS :
                DATE LIMITE D'INSCRIPTION SUR LES LISTES EN LIGNE{" "}
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 4 MARS :
                DATE LIMITE D'INSCRIPTION SUR LES LISTES À LA MAIRIE
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> Dates de
                meeting{" "}
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 10 AVRIL :
                PREMIER TOUR DES ÉLECTIONS PRÉSIDENTIELLES
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 24 AVRIL :
                DEUXIÈME TOUR DES ÉLECTIONS PRÉSIDENTIELLES
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 12 JUIN :
                PREMIER TOUR DES ÉLECTIONS LÉGISLATIVES
              </p>
              <p className="px-3 transition-transform delay-200 duration-500 cursor-pointer ease-out hover:scale-110  text-center md:text-left  py-2 my-3 mx-9 text-white   ">
                <FontAwesomeIcon icon={faHandPointRight} size="" /> 19 JUIN :
                DEUXIÈME TOUR DES ÉLECTIONS LÉGISLATIVES{" "}
              </p>
            </div>

            {/* <div className=" fixed bottom-2   z-50 ">
              <button className=" animate-bounce flex " aria-label="swipe-up">
                <Link href="/accueil">
                  <a alt="lien vers la page d'accueil" aria-hidden="false">
                    <FontAwesomeIcon icon={faAngleUp} size="3x" />
                  </a>
                </Link>
              </button>
            </div> */}
          </Fade>
          <Actualite />
        </section>
      </div>
    </>
  );
};

export default Menu;
