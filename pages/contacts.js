import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { page } from "./components/Layout";
const Contacts = () => {
  return (
    <>
      <Head>
        <title>{(page = "Contacts")}</title>
      </Head>
      <div
        className="bg-black
        text-white w-full h-screen   flex flex-col justify-start   contacts  "
      >
        <Fade cascade triggerOnce direction={"down"}>
          <div className="flex justify-center items-center">
            <h1 className="flex justify-center  my-4 text-3xl md:text-5xl underline font-bold text-center">
              Contacts
            </h1>
          </div>
          
          <div className=" flex flex-col justify-start items-start ml-4  sm:ml-32  ">
            <Link href="/" aria-label="email association">
              <a
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="3x"
                  className="text-white  "
                />
                <p className=" flex flex-col justify-center w-max p-1 items-center   ml-1 my-10  rounded-xl   text-white  ">
                  Assosuffrage@gmail.com
                </p>
              </a>
            </Link>

            <Link href="https://twitter.com/AssoSuffrage" aria-label="twitter association">
              <a
                target="_blank"
                rel="noopener"
                className="flex  items-center"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="3x"
                  className="text-white "
                />
                <p className=" flex flex-col justify-center w-5/6 p-1 items-center    rounded-xl ml-4 my-10   text-white  ">
                  
                </p>
              </a>
            </Link>
            <Link href="https://www.facebook.com/AssoSuffrage" aria-label="email association">
              <a target="_blank" rel="noopener" className="flex  items-center">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="3x"
                  className="text-white "
                />
                <p className=" flex flex-col justify-center w-5/6 p-1 items-center   rounded-xl ml-4 my-10   text-white  ">
                  
                </p>
              </a>
            </Link>
            <Link href="https://www.instagram.com/assosuffrage/" aria-label="instagram association">
              <a target="_blank" rel="noopener" className="flex items-center">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="3x"
                  className="text-white "
                />
                <p className=" flex flex-col justify-center w-5/6 p-1 items-center   rounded-xl ml-4 my-10   text-white  ">
                  
                </p>
              </a>
            </Link>
            <Link href="/" aria-label="email association">
              <a target="_blank" rel="noopener" className="flex  items-center">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="3x"
                  className="text-white "
                />
                <p className=" flex flex-col justify-center p-1 w-5/6 items-center    rounded-xl ml-4 my-10   text-white  ">
                  
                </p>
              </a>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contacts;
