import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import logo from "../../src/logo-3.png";

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const menuToggle = () =>
    {
        setToggle(!toggle)
        console.log(toggle);
    }
    return (
        <div className='bg-black'>
            
                <nav className='text-white'>
                    <ul className='flex flex-row justify-between mx-2'>
                        <li> <FontAwesomeIcon icon={faBars} size="2x" onClick={menuToggle} className='mt-2 cursor-pointer outline-none' /></li>
                        {/* <span className='absolute  right-1 '> <Image  src={logo} alt="suffrage logo" width={100} height={100} /></span> */}
                    </ul>
                    {!toggle ? null : (
                    <>
                        <section className='absolute top-2 bottom-2 left-2  pl-3 cursor-pointer  '>
                            <nav>
                                <ul className='flex flex-col '>
                                    <li className=''> <FontAwesomeIcon icon={faBars} onClick={menuToggle} size="2x" className='mt-3 cursor-pointer' />
                                        <span className=' font-bold text-3xl  py-5 ml-2 '>Menu</span> </li>
                                    <li className=' liste_titre font-bold text-sm py-5 '>
                                    <Link href="/sommes-nous">
                                   <a> Qui sommes nous ?</a>
                                   </Link></li>
                                    <li className=' liste_titre font-bold text-sm py-5 '>
                                         <Link href="/nos-actions">
                                         <a> Nos actions</a>
                                        </Link>
                                    </li>
                                    <li className=' liste_titre font-bold text-sm py-5 '>
                                        <Link href="/rejoindre">
                                         <a> Nous rejoindre</a>
                                        </Link>
                                    </li>
                                    <li className=' liste_titre contact font-bold text-sm py-5  '>
                                        <Link href="/contacts">
                                         <a> Contacts</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
            
                    </>
                )  }
                </nav>
            
        </div>
    );
};

export default NavBar;