import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { page } from "./components/Layout";
import blog from "../src/blog-remove.png";
import community from "../src/community-remove.png";
import task from "../src/task-remove.png";
const Nous = () => {
  return (
    <>
      <Head>
        <title>{(page = "Qui sommes-nous")}</title>
      </Head>
      <section
        className="bg-black
            text-white w-full h-full   flex  flex-col items-center sm:items-center sommes-nous"
      >
        <Fade cascade triggerOnce direction={"top"}>
          <h1 className="text-3xl md:text-5xl flex font-extrabold justify-center items-center mt-12 mb-24 md:mt-5 ">
            Qui sommes-nous ?
          </h1>
        </Fade>
        <Fade cascade triggerOnce direction={"left"}>
          <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
            <h2 className=" px-2  mb-3 text-xl font-bold">
              Présentation de l'association
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center xl:w-3/5 items-center">
              <Image
                src={community}
                alt="communauté photo"
                width={400}
                height={300}
                className="rounded-3xl"
              />
              <p className=" sm:w-2/5 lg:w-2/6 w-4/5 mt-2 md:ml-2 ">
                Speech sur notre objet "faciliter l'accès à la vie politique et
                créer un espace de débat démocratique pour la jeunesse{" "}
              </p>
            </div>
          </div>
        </Fade>
        <Fade cascade triggerOnce direction={"right"}>
          <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
            <h2 className=" px-2 mb-3 text-xl font-bold">
              Notre raison d'être
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center xl:w-3/5 items-center">
              <Image
                src={blog}
                alt="communauté photo"
                width={400}
                height={300}
                className="rounded-3xl  "
              />
              <p className=" sm:w-2/5 lg:w-2/6  w-4/5 mt-2 md:ml-2">
                Parler de la hausse de l'abstention, les raisons de cette
                abstention, que les jeunes ne sont pas désintéressés des
                questions sociétales environnementales .. mais qu'il existe une
                méfiance de la sphère politique{" "}
              </p>
            </div>
          </div>
        </Fade>
        <Fade cascade triggerOnce direction={"right"}>
          <div className="my-5  mx-2 text-center flex justify-center  items-center flex-col">
            <h2 className=" px-2 mb-3 text-xl font-bold ">Nos valeurs</h2>
            <div className="flex flex-col md:flex-row md:justify-center xl:w-3/5  items-center">
              <Image
                src={task}
                alt="communauté photo"
                width={400}
                height={300}
                className="rounded-3xl  "
              />
              <p className="sm:w-2/5 lg:w-2/6 w-4/5  mt-2 md:ml-2 ">
                Indépendance :texte explicatif de nos valeurs, indépendance
                signifie pour nous ...Vélocité : texte explicatif de nos
                valeurs, indépendance signifie pour nous ...{" "}
              </p>
              {/* <p className='sm:w-2/5 lg:w-2/6 w-4/5 mt-2 text-white bg-gradient-to-t from-gray-600 via-gray-700 to-gray-700 rounded-3xl'>Vélocité : texte explicatif de nos valeurs, indépendance signifie pour nous ...</p>
                                <p>Ethique : </p>
                                <p>Coopération : </p>
                                <p>Accessible : </p> */}
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Nous;
