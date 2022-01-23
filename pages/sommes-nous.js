import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";

const Nous = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
        text-white w-full h-full   sm:h-screen flex  flex-col items-center sm:items-center sommes-nous">
            <Fade cascade triggerOnce  direction={"top"}>
              <h1 className="text-2xl flex  justify-center items-center mt-12 md:mt-5 ">Qui sommes-nous ?</h1>
            </Fade>
            <Fade cascade triggerOnce  direction={"left"}>
                <div className="my-5 mx-2 text-center flex justify-center items-center flex-col" >
                    <h2 className=" px-2  mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">Présentation de l'association</h2>
                    <p className=' sm:w-2/5 lg:w-2/6'>Speech sur notre objet "faciliter l'accès à la vie politique et créer un espace de débat démocratique pour la jeunesse </p>
                </div>
            </Fade>
            <Fade cascade triggerOnce  direction={"right"}>
                <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
                    <h2 className=" px-2 mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">Notre raison d'être</h2>
                    <p className=' sm:w-2/5 lg:w-2/6'>Parler de la hausse de l'abstention, les raisons de cette abstention, que les jeunes ne sont pas désintéressés des questions sociétales environnementales .. mais qu'il existe une méfiance de la sphère politique </p>
                </div>
            </Fade>
            <Fade cascade triggerOnce  direction={"right"}>
                <div className="my-5 md:mb-8 mx-2 text-center flex  items-center flex-col">
                    <h2 className=" px-2 mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">Nos valeurs</h2>
                    <p>Indépendance : </p>
                    <p>Vélocité : </p>
                    <p>Ethique : </p>
                    <p>Coopération : </p>
                    <p>Accessible : </p>
                </div>
            </Fade>
            <div className=' fixed bottom-2'>
                <button className=' animate-bounce flex '>
                        <Link href="/accueil">
                        <a><FontAwesomeIcon icon={faAngleUp} size="3x"  /></a>
                        </Link>
                </button>
                   
            </div>
            
        </div>
    );
};

export default Nous;