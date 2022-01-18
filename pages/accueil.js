import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { Fade } from "react-awesome-reveal";

// import { useInView } from 'react-intersection-observer'

import neon from "../src/buzz.mp3"




const Accueil = () =>
{
    

    return (
        <div className='bg-black'>
            <header>
                <nav className='text-white'>
                    <ul className='flex flex-row justify-between mx-2'>
                        <li> <FontAwesomeIcon icon={faBars} size="2x" className='mt-2' /></li>
                        {/* <li>S'inscrire sur les listes électorales</li> */}
                    </ul>
                </nav>
            </header>
            <main className='text-white w-screen h-screen flex justify-center flex-col items-center'>
                <h1 className=' text-5xl md:text-8xl lg:text-9xl'>
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
               
                    <p className=' mt-12 font-bold text-xs sm:text-sm md:text-md  '>S'inscrire sur les listes électorales</p>
                
                <div className=' absolute bottom-2  '>
                    <button>
                        <Link href="/menu">
                         <a><FontAwesomeIcon icon={faAngleUp} size="3x" /></a>
                        </Link>
                    </button>
                     
                </div>
               
            </main>
        </div>
    );
};

export default Accueil;