import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
const Contacts = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
        text-white w-screen h-screen   flex flex-col  items-center ">
          <Fade cascade triggerOnce  direction={"left"}>
            <h2 className='text-2xl  flex justify-center my-4 p-2 bg-gradient-to-b from-blue-700 via-blue-800 to-red-500  rounded-3xl'>Contacts</h2>
            <div>
              <Link href="/" aria-label="email association">
                <a target="_blank" rel="noopener" className='flex justify-center items-center'>
                  <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-white   transition duration-300 ease-in hover:text-black   " />
                  <p className=" flex flex-col justify-center w-5/6 p-1 items-center bg-gradient-to-b from-blue-700 via-blue-800 to-red-500   rounded-xl mx-2 text-white  ">Assosuffrage@gmail.com</p>
                </a>
                
              </Link>
            
              <Link href="/" aria-label="email association">
                <a target="_blank" rel="noopener" className='flex justify-center items-center'>
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" className="text-white  transition duration-300 ease-in hover:text-black   " />
                  <p className=" flex flex-col justify-center w-5/6 p-1 items-center bg-gradient-to-b from-blue-700 via-blue-800 to-red-500   rounded-xl mx-2 text-white  ">Assosuffrage@twitter.com</p>
                </a>
                
              </Link>
              <Link href="/" aria-label="email association">
                <a target="_blank" rel="noopener" className='flex  items-center'>
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" className="text-white   transition duration-300 ease-in hover:text-black   " />
                  <p className=" flex flex-col justify-center w-5/6 p-1 items-center bg-gradient-to-b from-blue-700 via-blue-800 to-red-500   rounded-xl mx-2 text-white  ">Assosuffrage@facebook.com</p>
                </a>
                
              </Link>
              <Link href="/" aria-label="email association">
                <a target="_blank" rel="noopener" className='flex items-center'>
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" className="text-white  transition duration-300 ease-in hover:text-black   " />
                  <p className=" flex flex-col justify-center w-5/6 p-1 items-center bg-gradient-to-b from-blue-700 via-blue-800 to-red-500   rounded-xl mx-2 text-white  ">Assosuffrage@instagram.com</p>
                </a>
                
              </Link>
              <Link href="/" aria-label="email association">
                <a target="_blank" rel="noopener" className='flex  items-center'>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" className="text-white  transition duration-300 ease-in hover:text-black   " />
                  <p className=" flex flex-col justify-center p-1 w-5/6 items-center bg-gradient-to-b from-blue-700 via-blue-800 to-red-500   rounded-xl mx-2 text-white  ">Assosuffrage@linkedin.com</p>
                </a>
                
              </Link>
         
            </div>
          </Fade> 
        </div>
    );
};

export default Contacts;