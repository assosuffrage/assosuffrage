import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons';
// import { Fade } from "react-awesome-reveal";

// import { useInView } from 'react-intersection-observer'

import neon from "../src/neon.mp3"

const Menu = () =>
{
  
    return (
        <div className='bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500'>
           
            <main className='text-white w-screen h-screen   flex  flex-col justify-center items-center '>
                <div className='bg-gradient-to-b from-blue-700 via-blue-800 to-red-500  flex flex-row-reverse justify-center items-center  m-12 py-5 px-2 rounded-xl
                  '>
                    <h1 className=' font-bold text-xl md:text-2xl lg:text-2xl ' id='calendar'>
                        CALENDRIER ÉLECTORALES  
                    </h1>
                    <span className='pr-4'><FontAwesomeIcon icon={faCalendarAlt} size="2x"  /></span>
                </div>
               
                
                <div className='flex flex-col justify-center   font-semibold'>
                   
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 23 JANVIER : FERMETURE DES INSCRIPTIONS POUR LA PRIMAIRE POPULAIRE </p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 27 AU 30 JANVIER : PRIMAIRES POPULAIRES</p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 2 MARS : DATE LIMITE D'INSCRIPTION SUR LES LISTES  EN LIGNE </p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 4 MARS : DATE LIMITE D'INSCRIPTION SUR LES LISTES À LA MAIRIE</p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> Dates de meeting </p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 10 AVRIL : PREMIER TOUR DES ÉLECTIONS PRÉSIDENTIELLES</p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 24 AVRIL : DEUXIÈME TOUR DES ÉLECTIONS PRÉSIDENTIELLES</p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 12 JUIN : PREMIER TOUR DES ÉLECTIONS LÉGISLATIVES</p>
                   <p className='px-3  text-center md:text-left  py-2 my-3 mx-9 bg-gradient-to-r from-blue-700 via-blue-800 to-red-500 rounded-3xl  '><FontAwesomeIcon icon={faHandPointRight} size=""  /> 19 JUIN : DEUXIÈME TOUR DES ÉLECTIONS LÉGISLATIVES </p>
                   
                </div>
                  
               
                <div className=' fixed bottom-2   z-50 '>
                    <button className=' animate-bounce flex '>
                         <Link href="/accueil">
                           <a><FontAwesomeIcon icon={faAngleUp} size="3x"  /></a>
                         </Link>
                    </button>
                   
                </div>
               
              

               
            </main>
        </div>
    );
};

export default Menu;