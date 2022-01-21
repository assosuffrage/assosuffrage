import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { Fade } from "react-awesome-reveal";

// import { useInView } from 'react-intersection-observer'

import neon from "../src/neon.mp3";
// import logo from "../../src/logo-3.png";


const Accueil = () =>
{
    

    return (
        
       
        <main className='text-white bg-black w-full h-screen flex justify-center flex-col items-center'>
            <h1 className=' text-3xl md:text-8xl lg:text-9xl font-bold pl-2  z-50 ' id='calendar'>
                <span className='suff'>SUFF</span>
                <span className='rage'>RAGE</span>
            </h1>
            
                <audio
                controls
                autoPlay
                    src={neon} hidden>
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
            
                <p className=' mt-12 font-bold text-xs sm:text-sm md:text-md z-50 bg-gray-600 rounded-3xl p-3 subscribe cursor-pointer transition-transform delay-200 duration-500 ease-in-out outline-none hover:scale-125 '>S'inscrire sur les listes électorales</p>
            
            <div className=' absolute bottom-2 animate-bounce z-50 '>
                <button>
                    <Link href="/calendrier">
                        <a><FontAwesomeIcon icon={faAngleUp} size="3x" /></a>
                    </Link>
                </button>
                    
            </div>
            
        </main>
        
    );
};

export default Accueil;