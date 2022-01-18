import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { Fade } from "react-awesome-reveal";

// import { useInView } from 'react-intersection-observer'

import neon from "../src/neon.mp3"

const Menu = () =>
{
    const [toggle, setToggle] = useState(false)
    const menuToggle = () =>
    {
        setToggle(!toggle)
        console.log(toggle);
    }

    return (
        <div className='bg-black'>
            <header>
                <nav className='text-white'>
                    <ul className='flex flex-row justify-between mx-2'>
                        <li> <FontAwesomeIcon icon={faBars} onClick={menuToggle} size="2x"  className='mt-2 z-20' /></li>
                        <li>S'inscrire sur les listes électorales</li>
                    </ul>
                </nav>
            </header>
            <main className='text-white w-screen h-screen flex justify-center items-center'>
                <h1 className='text-5xl md:text-8xl lg:text-9xl z-50'>
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
            
                <div className=' absolute bottom-2  '>
                    <button >
                         <Link href="/accueil">
                           <a><FontAwesomeIcon icon={faAngleUp} size="3x" /></a>
                         </Link>
                    </button>
                   
                </div>
                {!toggle ? (
                    <>
                        <section className='absolute top-2 bottom-2 left-2   pl-3 '>
                            <nav>
                                <ul className='flex flex-col '>
                                    <li> <FontAwesomeIcon icon={faBars} onClick={menuToggle} size="2x"  className='' /></li>
                                    <li className=' font-bold text-sm py-5 '>Qui sommes nous</li>
                                    <li className=' font-bold text-sm py-5 '>Nos actions</li>
                                    <li className=' font-bold text-sm py-5 '>Nous rejoindre</li>
                                    <li className=' font-bold text-sm py-5 mt-60 '>Contacts</li>
                                </ul>
                            </nav>
                        </section>
            
                    </>
                ) : null }
              

               
            </main>
        </div>
    );
};

export default Menu;