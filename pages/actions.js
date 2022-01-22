import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
const Actions = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
        text-white w-screen h-full lg:h-screen flex justify-center flex-col items-center">
            <Fade cascade triggerOnce  direction={"top"}>
            <h1 className="text-2xl flex  justify-center items-center mt-12 lg:mt-0 ">Nos actions ?</h1>

            <div className="my-5 mx-2 text-center flex justify-center items-center flex-col" >
                <h2 className=" px-2  mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">La boîte à outils</h2>
                <p className=' md:w-3/5'>Expliquer la boite à outils, son fonctionnement, où elle se met en place, avec qui, comment, pourquoi.. </p>
            </div>
            <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
                <h2 className=" px-2 mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">Les interventions (conférences) dans les universités</h2>
                <p className=' md:w-3/5'>Expliquer la teneur de nos interventions, par exemple  intervenir pour parler du vote blanc et de l'utilité de le comptabiliser ... dans le but d'établir un débat démocratique et favoriser les échanges avec les élus </p>
            </div>
            <div className="my-5 mx-2 text-center flex justify-center items-center flex-col">
                <h2 className=" px-2 mb-3 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl">Les happenings dans la ville</h2>
                <p className=' md:w-3/5'>Expliquer nos actions dans la ville, notre démarche artistique pour sensibiliser à la politique, notre volonté de pousser quelques frontières par l'expérimentation</p>
                
            </div>
            <div className=' fixed bottom-2'>
                <button className=' animate-bounce flex '>
                        <Link href="/accueil">
                        <a><FontAwesomeIcon icon={faAngleUp} size="3x"  /></a>
                        </Link>
                </button>
                   
            </div>
            </Fade>
        </div>
    );
};

export default Actions;