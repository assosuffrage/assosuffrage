import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { page } from "./components/Layout";
const Actions = () => {
  return (
    <>
      <Head>
        <title>{(page = "Actions")}</title>
      </Head>
      <div
        className="bg-black
        text-white w-screen sm:h-screen  flex justify-start flex-col items-center sm:justify-start actions"
      >
        <Fade cascade triggerOnce direction={"top"}>
          <h1 className="text-2xl flex  justify-center items-center mt-3 sm:mt-8  lg:mt-12 ">
            Nos actions ?
          </h1>

          <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
            <h2 className=" px-2  mb-3 text-xl font-bold text-white  rounded-3xl">
              La boîte à outils
            </h2>
            <p className=" sm:w-3/5 lg:w-2/6 p-2 text-white bg-black  rounded-3xl">
              Expliquer la boite à outils, son fonctionnement, où elle se met en
              place, avec qui, comment, pourquoi..{" "}
            </p>
          </div>
          <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
            <h2 className=" px-2 mb-3 text-xl font-bold text-white  rounded-3xl">
              Les interventions (conférences) dans les universités
            </h2>
            <p className=" sm:w-3/5 lg:w-2/6 p-2 text-white bg-black  rounded-3xl">
              Expliquer la teneur de nos interventions, par exemple intervenir
              pour parler du vote blanc et de l'utilité de le comptabiliser ...
              dans le but d'établir un débat démocratique et favoriser les
              échanges avec les élus{" "}
            </p>
          </div>
          <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
            <h2 className=" px-2 mb-3 text-xl font-bold text-white  rounded-3xl">
              Les happenings dans la ville
            </h2>
            <p className=" sm:w-3/5 lg:w-2/6 p-2 text-white bg-black   rounded-3xl">
              Expliquer nos actions dans la ville, notre démarche artistique
              pour sensibiliser à la politique, notre volonté de pousser
              quelques frontières par l'expérimentation
            </p>
          </div>
          <div className=" fixed bottom-2 ">
            <button className=" animate-bounce flex  ">
              <Link href="/accueil">
                <a>
                  <FontAwesomeIcon icon={faAngleUp} size="3x" />
                </a>
              </Link>
            </button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Actions;
